import { use, useRef } from "react";
import { usePopoverContext } from "../context";
import React from "react";
import clsx from "clsx";
import { popoverTriggerStyle } from "../popover.css";

interface TriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Trigger: React.FC<TriggerProps> = ({ className, ...rest }) => {
  const { setAnchorEl, handleOpen } = usePopoverContext();

  return (
    <div
      ref={(ref) => setAnchorEl(ref)}
      onClick={handleOpen}
      className={clsx(popoverTriggerStyle, className)}
      {...rest}
    />
  );
};
