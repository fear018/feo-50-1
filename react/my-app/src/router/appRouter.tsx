import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { Home } from "../pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";
import { About } from "../pages/About/About";
import { Contacts } from "../pages/Contacts/Contacts";

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: ROUTES.CONTACTS,
    element: <Contacts />,
  },
]);
