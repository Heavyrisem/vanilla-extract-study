import { baseToken, colorToken } from "@/theme/theme.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  color: colorToken["text"],
  backgroundColor: colorToken["background.surface"],
  ...baseToken.transition.colors,
});
