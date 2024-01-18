import { useControlled } from "@/hooks/useControlled";
import clsx from "clsx";
import { HiCheck } from "react-icons/hi";
import { checkboxIconStyle, checkboxVariants } from "./checkbox.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { useCallback } from "react";

type CheckboxProps = Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> &
  RecipeVariants<typeof checkboxVariants> & {
    onClick?: (checked: boolean) => void;
  };

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp,
  disabled,
  defaultChecked,
  className,
  onClick,
  ...rest
}) => {
  const [checked, setChecked] = useControlled(
    defaultChecked ?? false,
    checkedProp
  );

  const handleClickCheckbox = useCallback(() => {
    onClick?.(!checked);
    setChecked((prev) => !prev);
  }, [checked, onClick, setChecked]);

  return (
    <button
      data-active={checked}
      className={clsx(checkboxVariants({ checked, disabled }), className)}
      onClick={handleClickCheckbox}
      disabled={disabled}
      {...rest}
    >
      <HiCheck className={checkboxIconStyle} />
    </button>
  );
};
