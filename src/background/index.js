/* eslint-disable no-undef */

import Settings from "./settings";

import { open } from "miscUtils";
import { setTabs } from "./util";
import { messages } from "./constants";

const {
  loadSettings,
  saveSettings,
  settingsValues,
  setSettingsValues
} = Settings();

let selTabs = [];
let index = 0;

const dispatcher = value => {
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
        setTabs().then(res => {
          selTabs = res;
          resolve(selTabs);
        });
      },
      [messages.funcTab]: data => {
        const { id, enabled } = data.data;
        selTabs.map(tab => {
          if (tab.id == id) {
            tab.enabled = enabled;
          }
        });
        resolve(selTabs);
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
            check: 3299324123,
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

const selNextTab = () => {
  if (index == selTabs.length) index = 0;
  else index++;
  let tab = selTabs[index];
  if (tab != undefined && tab.enabled == true) {
    let updateProperties = { active: true };
    chrome.tabs.update(tab.id, updateProperties, async () => {
      if (chrome.runtime.lastError) selNextTab(tab);
    });
  } else selNextTab(tab);
};

async function background() {
  await loadSettings();

  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (
      changeInfo.url &&
      selTabs[tab.index] != undefined &&
      selTabs[tab.index].enabled
    ) {
      selTabs.map((t, i) => {
        if (t.id == tabId) {
          index = i;
          selNextTab();
        }
      });
    }
  });

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
