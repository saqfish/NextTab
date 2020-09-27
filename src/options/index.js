import React from "react";
import ReactDOM from "react-dom";
import Options from "./Options";

import * as browser from "webextension-polyfill";

import { messages } from "constants";

function send(type, data) {
  browser.runtime.sendMessage({ type, data });
}
console.time("Options-load");
browser.runtime
  .sendMessage({ type: messages.initOptions, data: {} })
  .then(res => {
    console.log(res);
    ReactDOM.render(
      <Options theme={res.theme} data={res.data} func={send} />,
      document.getElementById("root")
    );
    console.timeEnd("Options-load");
  });
