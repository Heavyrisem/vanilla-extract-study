import { baseToken, colorToken } from "@/theme/theme.css";
import { transition } from "@/theme/token/transition";
import { recipe } from "@vanilla-extract/recipes";

export const buttonVariants = recipe({
  base: {
    paddingInline: baseToken.spacing["2"],
    paddingBlock: baseToken.spacing["1"],
    backgroundColor: colorToken["background.primary"],
    borderRadius: baseToken.radius.md,
    boxSizing: "border-box",
    fontWeight: baseToken.fontWeight.medium,
    cursor: "pointer",
    ...baseToken.transition.colors,
    ...baseToken.fontSize["14"],
  },
  variants: {
    variant: {
      outlined: {
        backgroundColor: "transparent",
        border: `2px solid ${colorToken["background.primary"]}`,
        color: colorToken["text.button.outlined"],
        "&:hover:not(:disabled)": {
          backgroundColor: colorToken["background.primary.hover"],
          borderColor: colorToken["background.primary.hover"],
          color: colorToken["text.button.contained"],
        },
      },
      contained: {
        backgroundColor: colorToken["background.primary"],
        border: `2px solid ${colorToken["background.primary"]}`,
        color: colorToken["text.button.contained"],
        "&:hover:not(:disabled)": {
          backgroundColor: colorToken["background.primary.hover"],
          borderColor: colorToken["background.primary.hover"],
        },
      },
    },
    disabled: {
      false: {},
      true: {
        opacity: 0.3,
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    variant: "contained",
    disabled: false,
  },
});
