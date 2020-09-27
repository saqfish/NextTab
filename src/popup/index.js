import React from "react";
import ReactDOM from "react-dom";
import Popup from "./Popup";

import * as browser from "webextension-polyfill";

import { messages } from "constants";

browser.runtime
  .sendMessage({ type: messages.initPopup, data: {} })
  .then(res => {
    ReactDOM.render(<Popup {...res} />, document.getElementById("root"));
  });
