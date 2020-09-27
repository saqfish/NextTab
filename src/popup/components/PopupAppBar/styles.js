const style = dark => {
  return {
    toolbar: {
      flexGrow: 1,
      backgroundColor: dark ? "#121212" : "#3f51b5"
    },
    title: { flexGrow: 1 },
    main: { color: "white"},
    settings: { color: "white"},
  };
};

export default style;
