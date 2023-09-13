import { useState } from "react";
import { Header } from "./containers/Header/Header";
import { Footer } from "./containers/Footer/Footer";
import { LoginForm } from "./containers/LoginForm/LoginForm";

import { Button } from "./components/Button/Button";
import { InputText } from "./components/InputText/InputText";

import { ILoginData } from "./containers/LoginForm/types";
import { LikeIcon, SettingsIcon } from "./images";

function App() {
  const [loginData, setLoginData] = useState<ILoginData | null>(null);
  console.log("LOGIN_DATA=>", loginData);

  const setLoginDataHandler = (data: ILoginData): void => {
    setLoginData(data);
  };

  const onClickHandlerRed = () => {
    console.log("RED Button Clicked");
  };

  const onClickHandlerBlue = () => {
    console.log("BLUE Button Clicked");
  };

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  console.log(SettingsIcon);

  return (
    <div className="App">
      <Header />

      <div className="container">
        <LikeIcon />

        <img src={SettingsIcon} alt="Settings Icon" />

        <h1>React Typescript Template</h1>

        <InputText onChange={onChangeInputHandler} />

        <Button bColor="red" onClick={onClickHandlerRed}>
          Red Button
        </Button>

        <Button bColor="blue" onClick={onClickHandlerBlue}>
          Blue Button
        </Button>

        <LoginForm setLoginDataHandler={setLoginDataHandler} />
      </div>

      <Footer />
    </div>
  );
}

export default App;

// Создать компонент Header // 80px - height
// Создать компонент ссылка (Link)
// компонент хедер должен содержать 3 ссылки и ипортироваться в App.tsx
// компонент ссылка должен принимать пропсы: ссылка (href), текст ссылки (children), цвет ссылки (color)
// Home, About, Contacts - должны быть по центру
