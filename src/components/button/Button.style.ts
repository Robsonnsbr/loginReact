// import styled from "styled-components";
// import { ButtonProps } from "./Button";

// type StyledProps = Pick<ButtonProps, "backgroundColor">;

// export const ContainerButton = styled.div<StyledProps>`
//   box-shadow: 0 0 2px 1px #00000086;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: var(--third);
//   margin: 5px;
//   max-width: 80px;
//   max-height: 45px;
// `;

// export const Button = styled.button`
//   font-size: 14px;
//   margin: 10px;
//   background-color: var(--button);
//   color: var(--on-primary);
//   min-width: 60px !important;
//   height: 25px;
//   box-shadow: 0px 0px 1px 1px #0000006f;
//   transition: box-shadow 50ms, width 50ms, height 50ms,
//     font-size 50ms color 50ms;
//   &:hover {
//     font-size: 15px;
//     box-shadow: 0px 0px 2px 2px #0000006f;
//     width: 62px;
//     height: 26px;
//   }
//   &:active {
//     color: var(--secondary);
//     background-color: ${(props) => props.backgroundColor};
//     box-shadow: 0px 0px 1px 1px #0000006f;
//     font-size: 14px;
//     width: 60px;
//     height: 25px;
//   }
// `;
import styled from "styled-components";
import { ButtonProps } from "./Button";

type StyledProps = Pick<ButtonProps, "backgroundcolor">;

export const ContainerButton = styled.div<StyledProps>`
  box-shadow: 0 0 2px 1px #00000086;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--third);
  margin: 5px;
  max-width: 100px;
  max-height: 56px;
`;

export const Button = styled.button<StyledProps>`
  padding: 10px;
  font-size: 14px;
  margin: 10px;
  background-color: ${(props) => props.backgroundcolor};
  color: var(--on-primary);
  min-width: 60px !important;
  box-shadow: 0px 0px 1px 1px #0000006f;
  transition: box-shadow 50ms, font-size 50ms color 50ms;
  &:hover {
    font-size: 15px;
    box-shadow: 0px 0px 2px 2px #0000006f;
  }
  &:active {
    color: var(--secondary);
    background-color: ${(props) => props.backgroundcolor};
    box-shadow: 0px 0px 1px 1px #0000006f;
    box-shadow: inset 5em 1em #0000006f;
    font-size: 14px;
  }
`;
