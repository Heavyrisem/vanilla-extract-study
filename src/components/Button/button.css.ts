import { baseToken, colorToken } from "@/theme/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonVariants = recipe({
  base: {
    padding: "0.25rem 0.5rem",
    backgroundColor: colorToken["background.primary"],
    color: colorToken["text"],
    borderRadius: "0.5rem",
    ...baseToken.fontSize["12"],
  },
  variants: {
    variant: {
      outlined: {
        backgroundColor: "transparent",
        border: `2px solid ${colorToken["background.primary"]}`,
        color: colorToken["background.primary"],
      },
      contained: {
        backgroundColor: colorToken["background.primary"],
      },
    },
  },
  defaultVariants: {
    variant: "contained",
  },
});
