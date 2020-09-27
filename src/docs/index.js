import React from "react";
import ReactDOM from "react-dom";
import Docs from "./Docs";

import * as browser from "webextension-polyfill";

import { messages } from "constants";

browser.runtime
  .sendMessage({ type: messages.initDocs })
  .then(res => {
    ReactDOM.render(
      <Docs theme={res.theme} />,
      document.getElementById("root")
    );
  });
