import { buttonStyle } from "./button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button className={buttonStyle} {...props} />;
};
