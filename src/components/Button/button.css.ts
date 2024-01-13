import { vars } from "@/theme/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  padding: "0.5rem 1rem",
  backgroundColor: vars.colors.primary,
  color: vars.colors.text,
  borderRadius: "0.5rem",
});
