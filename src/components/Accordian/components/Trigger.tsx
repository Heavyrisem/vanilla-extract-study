import React from "react";
import { useAccordianItemContext } from "../context/item";
import { useAccordianContext } from "../context/accordian";

export type TriggerProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Trigger: React.FC<TriggerProps> = ({ children, ...props }) => {
  const { handleOpen } = useAccordianContext();
  const { id } = useAccordianItemContext();

  return <div onClick={() => handleOpen(id)}>{children}</div>;
};
