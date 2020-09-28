/* eslint-disable no-undef */

import Settings from "./settings";

import { open } from "miscUtils";
import { messages } from "./constants";

const {
  loadSettings,
  saveSettings,
  settingsValues,
  setSettingsValues
} = Settings();

let selTabs = [];
let selected = 0;

const dispatcher = (value, sender) => {
  console.log(sender);
  return new Promise(resolve => {
    const dispatch = {
      [messages.initPopup]: () => {
        resolve({
          theme: settingsValues().theme,
          data: settingsValues(),
          tabs: selTabs
        });
      },
      [messages.initOptions]: () => {
        resolve({
          theme: settingsValues().theme,
          data: settingsValues()
        });
      },
      [messages.tabs]: () => {
        setTabs().then(() => resolve({ selTabs }));
      },
      [messages.funcTab]: data => {
        const { id, enabled } = data.data;
        selTabs.map(tab => {
          if (tab.id == id) {
            tab.enabled = enabled;
            if (enabled) selected++;
            else selected--;
          }
        });
        resolve({ tabs: selTabs });
        console.log(selTabs);
      },
      [messages.setSettingsValues]: data => {
        setSettingsValues(data);
        saveSettings();
        resolve(settingsValues());
      },
      [messages.openPage]: data => {
        open(settingsValues().inTab, data);
        resolve();
      },
      [messages.backup]: data => {
        const { load } = data;
        if (load) {
          const { backupData } = data;
          try {
            const tempRawData = atob(backupData);
            const tempData = JSON.parse(tempRawData);
            const check = tempData.hasOwnProperty("check");
            if (check) {
              setSettingsValues({ ...settingsValues(), ...tempData.settings });
              saveSettings();
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          var tempData = {
            check: 34032423,
            settings: settingsValues()
          };

          var url =
            "data:application/json;base64," +
            btoa(unescape(JSON.stringify(tempData)));
          browser.downloads.download({
            url: url,
            filename: "skeleton_background.json"
          });
        }
        resolve();
      }
    };
    dispatch[value.type](value.data);
  });
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url && selTabs[tab.index] !=undefined && selTabs[tab.index].enabled) {
    selTabs.map(t => {
      if (t.id == tabId) {
        console.log(`${t.id} changed`);
        selNextTab(tabId, tab.index);
      }
    });
  }
});

const selNextTab = (id, indx) => {
  if (indx + 1 > selected) selNextTab(id, 0);
  for (let i = indx + 1; i < selTabs.length; i++) {
    const t = selTabs[i];
    if (t.id != id && t.enabled == true) {
      let updateProperties = { active: true };
      chrome.tabs.update(t.id, updateProperties, () => {});
      break;
    }
  }
};

const setTabs = () => {
  return new Promise(resolve => {
    chrome.tabs.getAllInWindow(null, function(tabs) {
      if (selTabs.length != tabs.length || tabs.length == 0) {
        selTabs = tabs.map(x => x);
        selTabs.map(tab => {
          if (tab.enbaled == undefined) tab.enabled = false;
        });
        resolve();
      }
    });
  });
};

async function background() {
  await loadSettings();
  await setTabs();
  browser.runtime.onMessage.addListener(
    (message, sender) =>
      new Promise(async (resolve, reject) => {
        await dispatcher(message, sender)
          .then(res => resolve(res))
          .catch(res => reject(res));
      })
  );
}

background();
