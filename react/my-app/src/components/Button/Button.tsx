import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface IProps {
  className?: string;
  bcolor: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  className,
  bcolor,
  children,
  type = "button",
  onClick,
}: IProps) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      bcolor={bcolor}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

// export const Button = (props: IProps) => {
