import React, { useRef } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import BackupIcon from "@material-ui/icons/Backup";
import LoadIcon from "@material-ui/icons/Publish";
import SaveIcon from "@material-ui/icons/Save";

import { makeStyles } from "@material-ui/core/styles";

import { sendToBackground } from "miscUtils";
import { messages } from "constants";

import style from "./styles";
const useStyles = makeStyles(style);

const BackupPanel = () => {
  const classes = useStyles();
  const inputRef = useRef(null);

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar variant="square">
            <BackupIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Backup" secondary="" />
        <ListItemSecondaryAction>
          <Button
            variant="contained"
            color="primary"
            classes={{ root: classes.button }}
            onClick={() => {
              inputRef.current.click();
            }}
            startIcon={<LoadIcon />}
          >
            Load
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              sendToBackground(messages.backup, { load: false });
            }}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <input
        crossOrigin="anonymous"
        type="file"
        id="file"
        ref={inputRef}
        onChange={e => {
          let file = e.target.files[0];
          let reader = new FileReader();

          reader.onloadend = function() {
            var backupData = reader.result.replace(/^data:.+;base64,/, "");
            sendToBackground(messages.backup, { load: true, backupData });
          };

          reader.readAsDataURL(file);
        }}
        style={{ display: "none" }}
      />
    </>
  );
};

export default BackupPanel;
