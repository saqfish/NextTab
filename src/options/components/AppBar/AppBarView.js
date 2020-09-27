import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: "white",
    backgroundColor: theme.palette.type == "dark" ? "#121212" : "#3f51b5"
  },
  saveButton: {
    marginLeft: "auto"
  }
}));

const AppBarView = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={1} position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" noWrap>
          Settings
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarView;
