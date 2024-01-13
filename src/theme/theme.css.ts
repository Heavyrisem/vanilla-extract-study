import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#27272a",
  },
});

export const otherThemeClass = createTheme(vars, {
  color: {
    primary: "red",
  },
});
