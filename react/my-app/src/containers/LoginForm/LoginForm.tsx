import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import { IProps } from "./types";
import "./LoginForm.css";

export const LoginForm = ({ setLoginDataHandler }: IProps) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoginDataHandler({ login, password });
  };

  console.log("LOGIN=>", login);
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <h3>Login</h3>
      <InputText placeholder="Login: " onChange={loginHandler} />
      <InputText placeholder="Password: " onChange={passwordHandler} />
      <Button type="submit" bColor="blue">
        Submit
      </Button>
    </form>
  );
};
