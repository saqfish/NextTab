import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import BugIcon from "@material-ui/icons/BugReport";

import { sendToBackground } from "miscUtils";
import { messages } from "constants";

const Issues = () => {

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square">
            <BugIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bugs" secondary="Issues? Please report them!" />
        <ListItemSecondaryAction>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              sendToBackground(
                messages.openPage,
                "https://github.com/saqfish/extension-skeleton/issues"
              )
            }
            disableElevation
          >
            Issue Tracker
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default Issues;
