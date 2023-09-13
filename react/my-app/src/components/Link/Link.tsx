import { ReactNode } from "react";

interface IProps {
  href: string;
  children: ReactNode;
  color: string;
}

export const Link = ({ href, children, color }: IProps) => {
  return (
    <a
      href={href}
      className="link"
      style={{
        color: color,
      }}
    >
      {children}
    </a>
  );
};
