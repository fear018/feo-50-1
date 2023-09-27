import styled from "styled-components";
import InputMask from "react-input-mask";

interface IProps {
  ref?: any;
}

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const InputStyled = styled(InputMask)`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 6px 12px;
  transition: all 0.3s ease-in-out;
`;

export const ErrorMessage = styled.small`
  font-size: 12px;
  font-weight: bold;
  color: red;
`;
