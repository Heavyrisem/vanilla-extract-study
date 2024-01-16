import { COLOR_PALETTE } from "../token/color-palette";
import { DARK_COLOR_TOKEN } from "./dark.css";

export const LIGHT_COLOR_TOKEN: typeof DARK_COLOR_TOKEN = {
  // background
  "background.surface": "#ffffff",
  "background.primary": COLOR_PALETTE.zinc700,
  "background.primary.hover": COLOR_PALETTE.zinc800,
  "background.netural": COLOR_PALETTE.zinc500,
  // border
  "border.primary": COLOR_PALETTE.zinc500,
  "border.netural": COLOR_PALETTE.zinc700,
  // text
  text: COLOR_PALETTE.zinc800,
  "text.button.contained": "#ffffff",
  "text.button.outlined": COLOR_PALETTE.zinc800,
};
