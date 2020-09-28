import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

import { sendToBackground } from "miscUtils";
import { messages } from "constants";

import { makeStyles } from "@material-ui/core/styles";
import style from "./styles";

const Tab = props => {
  const { tab, func: setTabs } = props;

  const useStyles = makeStyles(style);
  const classes = useStyles();
  const handleEnabledChange = (id, enabled) => {
    sendToBackground(messages.funcTab, { data: { id, enabled } }).then(res =>
      setTabs(res)
    );
  };

  return (
    <ListItem className={classes.item}>
      <ListItemText
        primary={tab.title}
        secondary={tab.url}
        primaryTypographyProps={{ noWrap: true }}
        secondaryTypographyProps={{ noWrap: true }}
        className={classes.title}
      />
      <Switch
        checked={tab.enabled}
        color="primary"
        onChange={() => handleEnabledChange(tab.id, !tab.enabled)}
      />
    </ListItem>
  );
};

export default Tab;
