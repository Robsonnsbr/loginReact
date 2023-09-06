import { Button as StyledButton, ContainerButton } from "./Button.style";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  id: string;
  name?: string;
  value: string;
  backgroundcolor?: string;
  onClick?: () => void;
}

export const Button = ({
  type,
  id,
  name,
  value,
  backgroundcolor,
  onClick,
}: ButtonProps) => {
  return (
    <ContainerButton>
      <StyledButton
        backgroundcolor={backgroundcolor}
        type={type}
        id={id}
        name={name}
        value={value}
        onClick={onClick}
      >
        {value}
      </StyledButton>
    </ContainerButton>
  );
};
