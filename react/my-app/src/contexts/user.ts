import { createContext, useState } from "react";

interface IUserContext {
  name: string;
  setName: (name: string) => void;
}

export const UserContext = createContext<IUserContext>({
  name: "",
  setName: () => {},
});

export const useUserContextValue = () => {
  const [name, setName] = useState("");

  return {
    name,
    setName,
  };
};
