import { useState } from "react";

import { ToDoListForm } from "../../containers/ToDoListForm/ToDoListForm";
import { ToDoWrapper } from "../../containers/ToDoWrapper/ToDoWrapper";
import { IToDoFormData } from "../../containers/ToDoListForm/types";
import { Header } from "../../containers/Header/Header";

export const Home = () => {
  const [data, setData] = useState<IToDoFormData[]>([]);

  const setToDoDataHandler = (formData: IToDoFormData): void => {
    setData([...data, formData]);
  };

  const deleteItemHandler = (id: number): void => {
    const filteredData = data.filter((item) => item.id !== id);

    setData(filteredData);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>HOME_PAGE React Typescript Template</h1>

        <div
          style={{
            maxWidth: "350px",
            padding: "1rem",
          }}
        >
          <ToDoListForm setToDoDataHandler={setToDoDataHandler} />
          <ToDoWrapper data={data} deleteItemHandler={deleteItemHandler} />
        </div>
      </div>
    </div>
  );
};
