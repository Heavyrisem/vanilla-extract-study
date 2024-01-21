import { responseProperties } from "@/theme/properties/responsive-properties.css";
import { typoProperties } from "@/theme/properties/typo-properties.css";
import { colorToken } from "@/theme/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { createSprinkles } from "@vanilla-extract/sprinkles";

export const textStyles = style({
  color: colorToken.text,
});

export const textSprinkles = createSprinkles(
  responseProperties,
  typoProperties
);

export type TextSprinkles = Parameters<typeof textSprinkles>[0];
