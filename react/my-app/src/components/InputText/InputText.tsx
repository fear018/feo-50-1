import { forwardRef } from "react";
import { InputStyled, Wrapper, ErrorMessage } from "./styles";

interface IProps {
  error?: string;
  placeholder?: string;
}

export const InputText = forwardRef(
  ({ placeholder, error, ...rest }: IProps, ref) => {
    return (
      <Wrapper>
        <InputStyled placeholder={placeholder} ref={ref} {...rest} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
);
