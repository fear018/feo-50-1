import { Link } from "../../components/Link/Link";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/home" color="white">
        Home
      </Link>
      <Link href="/about" color="white">
        About
      </Link>
      <Link href="/contacts" color="white">
        Contacts
      </Link>
    </footer>
  );
};
