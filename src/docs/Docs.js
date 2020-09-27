import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Docs = props => {
  const theme = {
    ...props.theme
  };

  console.log("docs");
  const mainTheme = createMuiTheme(theme);
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      docs
    </ThemeProvider>
  );
};

export default Docs;
