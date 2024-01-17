import { baseToken, colorToken } from "@/theme/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const popoverTriggerStyle = style({
  display: "inline-block",
});

export const popoverVariants = recipe({
  base: {
    position: "absolute",
    padding: baseToken.spacing[1],
    backgroundColor: colorToken["background.primary"],
    borderRadius: baseToken.radius.sm,
    marginTop: baseToken.spacing[1],
  },
  variants: {
    open: {
      false: {
        display: "none",
      },
      true: {
        display: "block",
      },
    },
  },
});
