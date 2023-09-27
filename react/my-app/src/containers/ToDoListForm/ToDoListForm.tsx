import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import { IProps } from "./types";
import "./ToDoListForm.css";

export const ToDoListForm = ({ setToDoDataHandler }: IProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    form.reset();

    setToDoDataHandler({ id: Date.now(), title, description });
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <h3>To Do List Form</h3>
      {/* <InputText placeholder="Title: " onChange={titleHandler} />
      <InputText placeholder="Description: " onChange={descriptionHandler} /> */}
      <Button type="submit" bcolor="blue">
        Submit
      </Button>
    </form>
  );
};
