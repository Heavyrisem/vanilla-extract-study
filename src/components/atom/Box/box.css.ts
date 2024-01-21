import { responseProperties } from "@/theme/properties/responsive-properties.css";
import { typoProperties } from "@/theme/properties/typo-properties.css";
import { createSprinkles } from "@vanilla-extract/sprinkles";

export const boxSprinkles = createSprinkles(responseProperties, typoProperties);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
