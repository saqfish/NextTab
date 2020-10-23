/* eslint-disable no-undef */

const getSelected = stabs => {
  return new Promise(resolve => {
    let count = 0;
    chrome.tabs.getAllInWindow(null, function(tabs) {
      stabs.map((t1, i) => {
        let exists = tabs.some(t2 => {
          let test = t1.id == t2.id;
          return test;
        });
        if (exists && t1.enabled) count++;
        else if (!exists) stabs.splice(i, 1);
      });
      resolve(count);
    });
  });
};

const setTabs = () => {
  let stabs;
  return new Promise(resolve => {
    chrome.tabs.getAllInWindow(null, function(tabs) {
      stabs = tabs.map(x => x);
      stabs.map(tab => {
        tab.enabled = false;
      });
      resolve(stabs);
    });
  });
};

export {getSelected, setTabs};
