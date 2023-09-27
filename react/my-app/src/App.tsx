import { RouterProvider } from "react-router-dom";

import { appRouter } from "./router/appRouter";

import { UserContext, useUserContextValue } from "./contexts/user";

function App() {
  return (
    <UserContext.Provider value={useUserContextValue()}>
      <RouterProvider router={appRouter} />
    </UserContext.Provider>
  );
}

export default App;
