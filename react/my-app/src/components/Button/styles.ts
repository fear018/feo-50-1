import styled from "styled-components";

export const ButtonStyled = styled.button<{ bcolor: string }>`
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  background-color: ${({ bcolor }) =>
    bcolor === "red" ? "#f44336" : bcolor === "blue" ? "#2196f3" : "#000"};
  border: 1px solid
    ${({ bcolor }) =>
      bcolor === "red" ? "#f44336" : bcolor === "blue" ? "#2196f3" : "#e0e0e0"};
  color: ${({ bcolor }) => (bcolor ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ bcolor }) =>
      bcolor === "red" ? "#d32f2f" : bcolor === "blue" ? "#1976d2" : "#000"};
    border-color: ${({ bcolor }) =>
      bcolor === "red" ? "#d32f2f" : bcolor === "blue" ? "#1976d2" : "#000"};
  }
`;
