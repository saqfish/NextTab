const style = (isDark) => {
  return {
    root: {
      minWidth: 500,
      display: "flex",
      flexDirection: "column"
    },
    avatar: {
      color: isDark ? "white" : "black",
      backgroundColor: isDark ? "#3f51b5" : "#e0e0e0"
    },
    list: {
      maxHeight: 300,
      overflowY: 'auto',
    },
    cycle: {
      display: "flex",
      justifyContent: "flex-end",
    },
    actions: { }
  };
};

export default style;
