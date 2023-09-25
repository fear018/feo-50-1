import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
