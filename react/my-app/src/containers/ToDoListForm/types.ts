export interface IToDoFormData {
  id: number;
  title: string;
  description: string;
}

export interface IProps {
  setToDoDataHandler: (data: IToDoFormData) => void;
}
