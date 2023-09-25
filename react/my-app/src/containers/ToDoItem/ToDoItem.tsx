import { ToDoItemStyled, Text, ButtonStyled } from "./styles";

interface IProps {
  id: number;
  title: string;
  description: string;
  deleteItemHandler: (id: number) => void;
}
// props
export const ToDoItem = ({
  id,
  title,
  description,
  deleteItemHandler,
}: IProps) => {
  const deleteItem = () => {
    deleteItemHandler(id);
  };

  return (
    <ToDoItemStyled>
      <Text $color="red">Title: {title}</Text>
      <Text $color="purple">Description: {description}</Text>
      <ButtonStyled bcolor="blue" onClick={deleteItem}>
        Delete
      </ButtonStyled>
    </ToDoItemStyled>
  );
};
