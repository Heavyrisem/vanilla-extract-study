import clsx from "clsx";
import { selectPopoverStyles } from "../select.css";
import { PopoverContentProps } from "../../Popover/components/Content";
import { Popover as PopoverComponent } from "../../Popover";

interface SelectPopoverProps extends PopoverContentProps {}

export const Popover: React.FC<SelectPopoverProps> = ({
  className,
  ...rest
}) => {
  return (
    <PopoverComponent.Content
      className={clsx(selectPopoverStyles, className)}
      {...rest}
    />
  );
};
