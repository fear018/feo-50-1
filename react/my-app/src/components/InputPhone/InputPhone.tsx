import { forwardRef } from "react";
import { InputStyled, Wrapper, ErrorMessage } from "./styles";

interface IProps {
  error?: string;
  placeholder?: string;
  mask: string;
}

export const InputPhone = forwardRef(
  ({ placeholder, mask, error, ...rest }: IProps, ref) => {
    return (
      <Wrapper>
        <InputStyled
          placeholder={placeholder}
          mask={mask}
          // ref={ref}
          {...rest}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
);
