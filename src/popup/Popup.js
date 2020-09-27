import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import PopupAppBar from "./components/PopupAppBar/PopupAppBar";
import Tab from "./components/Tabs/Tab";

import override from "./overrides";
import style from "./styles";

const Popup = props => {
  console.log(props);
  const { tabs } = props;
  const defaultTheme = createMuiTheme();


  const theme = {
    ...props.theme,
    overrides: override(defaultTheme)
  };

  const isDark = props.theme.palette.type == "dark";
  const useStyles = makeStyles(() => style(isDark));

  const mainTheme = createMuiTheme(theme);
  const classes = useStyles();

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <PopupAppBar />
        <List>
          {tabs.map(tab => {
            return <Tab tab={tab} />;
          })}
        </List>
      </div>
    </ThemeProvider>
  );
};

export default Popup;
