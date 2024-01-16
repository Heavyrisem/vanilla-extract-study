import { useSprinkleProps } from "@/hooks/useSprinkleProps";
import React from "react";
import { TextSprinkles, textSprinkles, textStyles } from "./text.css";
import clsx from "clsx";

type TextProps = React.HTMLAttributes<HTMLSpanElement> & TextSprinkles;

export const Text: React.FC<TextProps> = ({ className, ...rest }) => {
  const { sprinkleProps, nativeProps } = useSprinkleProps(
    rest,
    textSprinkles.properties
  );

  return (
    <span
      className={clsx(textSprinkles(sprinkleProps), textStyles, className)}
      {...nativeProps}
    />
  );
};
