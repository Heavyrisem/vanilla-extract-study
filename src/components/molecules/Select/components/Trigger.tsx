import { Popover } from "../../Popover";
import { PopoverTriggerProps } from "../../Popover/components/Trigger";

export interface SelectTriggerProps extends PopoverTriggerProps {}

export const Trigger: React.FC<SelectTriggerProps> = (props) => {
  return <Popover.Trigger {...props} />;
};
