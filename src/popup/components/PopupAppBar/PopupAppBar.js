import React from "react";

import IconButton from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tooltip from "@material-ui/core/Tooltip";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { sendToBackground } from "miscUtils";
import { messages } from "constants";

import style from "./styles";

const PopupAppBar = () => {
  const theme = useTheme();
  const isDark = theme.palette.type == "dark";
  const useStyles = makeStyles(() => style(isDark));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static">
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography variant="h6" className={classes.title}>
            MultiTab
          </Typography>
          <Tooltip title="Reset">
            <IconButton
              className={classes.main}
              onClick={() => sendToBackground(messages.tabs, {})}
              disableElevation
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PopupAppBar;
