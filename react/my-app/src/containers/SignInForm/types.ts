export interface ILoginData {
  login: string;
  password: string;
}

export interface IProps {
  setLoginDataHandler?: (data: ILoginData) => void;
}
