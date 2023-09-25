import styled from "styled-components";

import { Button } from "../../components/Button/Button";

export const ToDoItemStyled = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p<{ $color?: string }>`
  margin-bottom: 0.5rem;
  color: ${({ $color }) => $color};
`;

export const ButtonStyled = styled(Button)`
  background-color: purple;
`;
