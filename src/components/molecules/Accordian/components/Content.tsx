import clsx from "clsx";
import { useAccordianItemContext } from "../context/item";
import { useAccordianContext } from "../context/accordian";
import { contentStyle } from "../accordian.css";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<ContentProps> = ({
  className,
  children,
  ...props
}) => {
  const { opened } = useAccordianContext();
  const { id } = useAccordianItemContext();

  return (
    <div
      className={clsx(contentStyle, className)}
      data-open={opened === id}
      {...props}
    >
      {children}
    </div>
  );
};
