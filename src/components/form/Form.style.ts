import styled from "styled-components";

export const FormStyle = styled.form`
  color: var(--on-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  min-width: 350px;

  & input {
    min-width: 300px;
  }
`;

export const ContainerFieldStyle = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: grid;
  justify-content: center;
  margin: 5px;
  background-color: var(--third);
  padding: 5px;
  box-shadow: 0 0 2px 1px #00000086;

  & input {
    color: var(--on-secondary);
    font-size: 16px;
    padding: 5px;
    text-align: center;
    box-shadow: inset 0 0 2px 1px #00000086;
  }
`;
