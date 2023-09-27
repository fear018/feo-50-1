import { useContext } from "react";
import { HeaderStyled, NavLinkCustom } from "./styles";

import { ROUTES } from "../../constants/routes";
import { UserContext } from "../../contexts/user";

interface IProps {
  type: "warn" | "info" | "error" | "success";
}

export const Header = () => {
  const user = useContext(UserContext);
  console.log(user);
  const links = [
    {
      id: 1,
      href: ROUTES.HOME,
      children: "Home",
    },
    {
      id: 2,
      href: ROUTES.SIGN_IN,
      children: "Sign In",
    },
    {
      id: 3,
      href: ROUTES.ABOUT,
      children: "About",
    },
    {
      id: 4,
      href: ROUTES.CONTACTS,
      children: "Contacts",
    },
  ];

  const changeNameHandler = () => {
    user.setName("Welcome");
  };

  return (
    <HeaderStyled>
      {user?.name && <p>{user.name}</p>}
      <button onClick={changeNameHandler}>Change name</button>
      {links.map(({ id, href, children }) => (
        <NavLinkCustom key={id} to={href}>
          {children}
        </NavLinkCustom>
      ))}
      <Notification type={"warn"} />
      <Notification type={"error"} />
      <Notification type={"info"} />
      <Notification type={"success"} />
    </HeaderStyled>
  );
};
