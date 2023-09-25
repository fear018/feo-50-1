import { HeaderStyled, NavLinkCustom } from "./styles";

export const Header = () => {
  const links = [
    {
      id: 1,
      href: "/",
      children: "Home",
    },
    {
      id: 2,
      href: "/about",
      children: "About",
    },
    {
      id: 3,
      href: "/contacts",
      children: "Contacts",
    },
  ];

  return (
    <HeaderStyled>
      {links.map(({ id, href, children }) => (
        <NavLinkCustom key={id} to={href}>
          {children}
        </NavLinkCustom>
      ))}
    </HeaderStyled>
  );
};
