const messages = {
  initMain: 0,
  initPopup: 1,
  initOptions: 2,
  tabs: 3,
  funcTab: 4,
  setSettingsValues: 5,
  openPage: 6,
  backup: 7,
};

const keys = {
  settings: "ntb_settings"
};

const defaults = {
  settings: {
    inTab: true,
    theme: {
      palette: {
        type: "dark"
      }
    }
  }
};
export { messages, keys, defaults };
