import clsx from "clsx";
import { SelectItem, useSelectContext } from "../context";
import { selectItemIconVariants, selectItemVariants } from "../select.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { useEffect, useMemo } from "react";
import { HiCheck } from "react-icons/hi";

export type SelectItemProps = Omit<SelectItem, "label"> &
  React.HTMLAttributes<HTMLDivElement> &
  RecipeVariants<typeof selectItemVariants>;

export const Item: React.FC<SelectItemProps> = ({
  id,
  value,
  className,
  children,
  ...rest
}) => {
  const { selected, handleSelectItem, addItem, removeItem } =
    useSelectContext();

  const isSelected = useMemo(() => selected.includes(id), [selected, id]);

  useEffect(() => {
    addItem({ id, value, label: children });
    return () => removeItem(id);
  }, [addItem, children, id, removeItem, value]);

  return (
    <div
      className={clsx(selectItemVariants(), className)}
      onClick={() => handleSelectItem({ id, value, label: children })}
      {...rest}
    >
      <span>{children}</span>
      <HiCheck className={selectItemIconVariants({ visible: isSelected })} />
    </div>
  );
};
