import { Link } from "../../components/Link/Link";

import "./Header.css";

export const Header = () => {
  const links = [
    {
      id: 1,
      href: "/home",
      color: "red",
      children: "Home",
    },
    {
      id: 2,
      href: "/about",
      color: "blue",
      children: "About",
    },
    {
      id: 3,
      href: "/contacts",
      color: "purple",
      children: "Contacts",
    },
  ];

  return (
    <header className="header">
      {links.map((link) => (
        <Link key={link.id} href={link.href} color={link.color}>
          {link.children}
        </Link>
      ))}
    </header>
  );
};
