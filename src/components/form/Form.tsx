import { ReactElement } from "react";
import { ContainerFieldStyle, FormStyle } from "./Form.style";

interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  method?: string;
  children: ReactElement[];
}

interface ContainerFieldProps {
  children: ReactElement[];
}

export const Form = ({ onSubmit, method, children }: FormProps) => {
  return (
    <FormStyle onSubmit={onSubmit} method={method}>
      {children}
    </FormStyle>
  );
};

export const ContainerField = ({ children }: ContainerFieldProps) => {
  return <ContainerFieldStyle>{children}</ContainerFieldStyle>;
};
