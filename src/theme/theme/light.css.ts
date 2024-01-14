import { COLOR_PALETTE } from "../token/color-palette";
import { DARK_COLOR_TOKEN } from "./dark.css";

export const LIGHT_COLOR_TOKEN: typeof DARK_COLOR_TOKEN = {
  // background
  "background.primary": COLOR_PALETTE.primary[5],
  "background.netural": COLOR_PALETTE.neutral[5],
  // border
  "border.primary": COLOR_PALETTE.primary[5],
  "border.netural": COLOR_PALETTE.neutral[5],
  // text
  text: COLOR_PALETTE.shades.white,
  "text.inverse": COLOR_PALETTE.shades.black,
};
