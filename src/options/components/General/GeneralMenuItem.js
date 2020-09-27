import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from '@material-ui/icons/Info';

import { views } from "optionsConstants";

const GeneralMenuItem = props => {
  return (
    <ListItem
      dense={true}
      button
      onClick={() => {
        props.func(views.GENERAL);
      }}
    >
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="General" />
    </ListItem>
  );
};

export default GeneralMenuItem;
