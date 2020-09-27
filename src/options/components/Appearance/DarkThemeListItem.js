import React, { useRef } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const DarkThemeListItem = props => {
  const { data: settings, func: setSettings } = props;

  const darkSwitchRef = useRef(null);

  const handleForegroundChange = event => {
    const value = event.target.checked;
    setDark(value);
  };

  const handleClick = () => {
    if (darkSwitchRef.current) {
      darkSwitchRef.current.click();
    }
  };

  const setDark = value => {
    setSettings(prev => ({
      ...prev,
      theme: {
        palette: { type: value ? "dark" : "light" }
      }
    }));
  };
  return (
    <ListItem button onClick={handleClick}>
      <ListItemText
        primary="Apply dark theme"
        secondary={`${
          settings.theme.palette.type == "dark" ? "Dark" : "Light"
        } theme applied`}
      />
      <ListItemSecondaryAction>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                inputRef={darkSwitchRef}
                checked={settings.theme.palette.type == "dark" ? true : false}
                onChange={handleForegroundChange}
                value={settings.theme.palette.type == "dark" ? true : false}
                color="primary"
              />
            }
          />
        </FormGroup>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default DarkThemeListItem;
