import { defineProperties } from "@vanilla-extract/sprinkles";
import { fontSize } from "../token/font-size";

export const typoProperties = defineProperties({
  conditions: {
    all: {},
    sm: { "@media": "(min-width: 640px)" },
    md: { "@media": "(min-width: 768px)" },
    lg: { "@media": "(min-width: 1024px)" },
    xl: { "@media": "(min-width: 1280px)" },
    "2xl": { "@media": "(min-width: 1536px)" },
  },
  defaultCondition: "all",
  properties: {
    fontSize,
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      heavy: "800",
    },
  },
});
