import * as browser from "webextension-polyfill";

const sendToBackground = (type, data) => {
  try {
    return browser.runtime.sendMessage({ type, data });
  } catch {
    return Promise.reject();
  }
};

const openInWindow = url => {
  return browser.windows.create({
    url,
    type: "popup",
    height: 600,
    width: 900
  });
};

const openInTab = url => {
  return browser.tabs.create({
    url,
    active: true
  });
};

const open = (tab, url) => {
  if (tab) openInTab(url);
  else openInWindow(url);
};

const reloadInWindow = url => {
  return browser.tabs.update({ url });
};

const copyToClipboard = value => {
  return new Promise((reject, resolve) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export {
  sendToBackground,
  openInWindow,
  openInTab,
  open,
  reloadInWindow,
  copyToClipboard
};
