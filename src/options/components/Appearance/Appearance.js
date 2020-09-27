import React, { useContext } from "react";

import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";

import DarkThemeListItem from "./DarkThemeListItem";

import { optionsContext } from "optionsContext";
import style from "./styles";

const useStyles = makeStyles(style);

const Appearance = () => {
  const [settings, setSettings] = useContext(optionsContext);
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <DarkThemeListItem data={settings} func={setSettings} />
    </List>
  );
};

export default Appearance;
