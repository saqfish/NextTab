import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PaletteIcon from '@material-ui/icons/Palette';

import { views } from "optionsConstants";

const AppearanceMenuItem = props => {
  return (
    <ListItem
      dense={true}
      button
      onClick={() => {
        props.func(views.APPEARANCE);
      }}
    >
      <ListItemIcon>
        <PaletteIcon />
      </ListItemIcon>
      <ListItemText primary="Appearance" />
    </ListItem>
  );
};

export default AppearanceMenuItem;
