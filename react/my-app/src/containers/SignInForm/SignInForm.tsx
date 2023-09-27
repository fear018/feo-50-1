import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button/Button";
import { InputText } from "../../components/InputText/InputText";

import { IProps } from "./types";
import { SignInFormStyled } from "./styles";
import { schema } from "./data";
import { InputPhone } from "../../components/InputPhone/InputPhone";

export const SignInForm = ({ setLoginDataHandler }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <SignInFormStyled className="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <h3>Sign In Form</h3>
      <InputText
        placeholder="Username: "
        error={errors?.username?.message}
        {...register("username")}
      />
      <InputText
        placeholder="Email: "
        error={errors?.email?.message}
        {...register("email")}
      />
      <InputText
        placeholder="Password: "
        error={errors?.password?.message}
        {...register("password")}
      />
      {/* <InputPhone
        placeholder="Phone: "
        mask="+\912 99 999 99"
        error={errors?.phone?.message}
        {...register("phone")}
      /> */}
      <Button type="submit" bcolor="blue">
        Submit
      </Button>
    </SignInFormStyled>
  );
};
