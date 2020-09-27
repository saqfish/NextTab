import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import GeneralMenuItem from "../General/GeneralMenuItem";
import AppearanceMenuItem from "../Appearance/AppearanceMenuItem.js";
import HelpMenuItem from "./HelpMenuItem.js";

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  saveButton: {
    marginLeft: "auto"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    padding: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const DrawerView = props => {
  const DrawerList = () => {
    return (
      <List>
        <GeneralMenuItem func={props.func} />
        <AppearanceMenuItem func={props.func} />
        <Divider />
        <HelpMenuItem />
      </List>
    );
  };

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <DrawerList />
      </List>
    </Drawer>
  );
};
export default DrawerView;
