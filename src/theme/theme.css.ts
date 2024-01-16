import {
  createTheme,
  createThemeContract,
  createVar,
} from "@vanilla-extract/css";
import { LIGHT_COLOR_TOKEN } from "./theme/light.css";
import { DARK_COLOR_TOKEN } from "./theme/dark.css";
import { fontSize } from "./token/font-size";
import { width } from "./token/width";
import { height } from "./token/height";
import { spacing } from "./token/spacing";
import { radius } from "./token/radius";
import { fontWeight } from "./token/font-weight";
import { transition } from "./token/transition";

export const [baseTokenClass, baseToken] = createTheme({
  fontSize,
  fontWeight,
  width,
  height,
  spacing,
  radius,
  transition,
});
export const colorToken = createThemeContract(DARK_COLOR_TOKEN);

export const darkThemeClass = createTheme(colorToken, DARK_COLOR_TOKEN);
export const lightThemeClass = createTheme(colorToken, LIGHT_COLOR_TOKEN);
