import { useMemo } from "react";
import { buttonVariants } from "./button.css";
import clsx from "clsx";
import { RecipeVariants } from "@vanilla-extract/recipes";

type ButtonProps = RecipeVariants<typeof buttonVariants> &
  React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, disabled }), className)}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    />
  );
};
