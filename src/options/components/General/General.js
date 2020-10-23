import React from "react";

import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import BackupPanel from "./BackupPanel";
import style from "./styles";

import { useTheme, makeStyles } from "@material-ui/core/styles";

import { version } from "manifest";
const useStyles = makeStyles(style);

export default function General() {
  const theme = useTheme();
  const dark = theme.palette.type === "dark";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.logoCard}>
        <CardHeader
          avatar={
            <Avatar
              variant="square"
              alt="Logo"
              src={dark ? "/img/icon_white128.png" : "/img/icon128.png"}
            />
          }
          title="NextTab"
          subheader={version}
        />
      </Card>
      <List>
        <BackupPanel />
      </List>
    </div>
  );
}
