import {
  createTheme,
  createThemeContract,
  createVar,
} from "@vanilla-extract/css";
import { LIGHT_COLOR_TOKEN } from "./theme/light.css";
import { DARK_COLOR_TOKEN } from "./theme/dark.css";
import { fontSize } from "./token/font-size";

export const [baseTokenClass, baseToken] = createTheme({ fontSize });
export const colorToken = createThemeContract(DARK_COLOR_TOKEN);

export const darkThemeClass = createTheme(colorToken, DARK_COLOR_TOKEN);
export const lightThemeClass = createTheme(colorToken, LIGHT_COLOR_TOKEN);
