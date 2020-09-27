import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";

import { sendToBackground } from "miscUtils";
import { messages } from "constants";

const HelpMenuItem = () => {
  return (
    <ListItem
      dense={true}
      button
      onClick={() => {
        sendToBackground(messages.openPage, "docs.html");
      }}
    >
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
  );
};

export default HelpMenuItem;
