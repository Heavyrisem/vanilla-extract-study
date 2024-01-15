import { COLOR_PALETTE } from "../token/color-palette";
import { DARK_COLOR_TOKEN } from "./dark.css";

export const LIGHT_COLOR_TOKEN: typeof DARK_COLOR_TOKEN = {
  // background
  "background.primary": COLOR_PALETTE.zinc700,
  "background.netural": COLOR_PALETTE.zinc500,
  // border
  "border.primary": COLOR_PALETTE.zinc700,
  "border.netural": COLOR_PALETTE.zinc500,
  // text
  text: COLOR_PALETTE.zinc800,
  "text.button.inverse": "#ffffff",
};
