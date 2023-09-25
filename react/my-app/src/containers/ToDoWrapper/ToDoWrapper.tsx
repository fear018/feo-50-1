import { ToDoItem } from "../ToDoItem/ToDoItem";
import { IToDoFormData } from "../ToDoListForm/types";
import "./ToDoWrapper.css";

interface IProps {
  data: IToDoFormData[];
  deleteItemHandler: (id: number) => void;
}

export const ToDoWrapper = ({ data, deleteItemHandler }: IProps) => {
  return (
    <div className="todo-wrapper">
      {data.length === 0 && <h4>Data is empty ...</h4>}

      {data.map(({ id, title, description }: IToDoFormData) => (
        <ToDoItem
          key={id}
          id={id}
          title={title}
          description={description}
          deleteItemHandler={deleteItemHandler}
        />
      ))}
    </div>
  );
};
