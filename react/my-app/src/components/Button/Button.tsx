import { ReactNode } from "react";
import "./Button.css";

interface IProps {
  bColor: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  bColor,
  children,
  type = "button",
  onClick,
}: IProps) => {
  return (
    <button className={`button ${bColor}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

// export const Button = (props: IProps) => {
