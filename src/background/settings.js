/* eslint-disable no-undef */
import { keys, defaults } from "constants";
export default () => {
  let settings = defaults.settings;
  return {
    loadSettings: () => {
      return new Promise(resolve => {
        const key = keys.settings;
        browser.storage.local.get([key]).then(items => {
          if (typeof items[key] != "undefined")
            settings = { ...settings, ...items[key] };
          resolve();
        });
      });
    },
    saveSettings: () => {
      browser.storage.local.set({
        [keys.settings]: settings
      });
    },
    settingsValues: () => {
      return settings;
    },
    setSettingsValues: values => {
      settings = { ...settings, ...values };
    }
  };
};
