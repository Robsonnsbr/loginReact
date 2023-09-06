import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CadastroContext } from "../../contexts/CadastroContext";
import { Button, ContainerField, Form, Page, Wrapper } from "../../components";
import { useNavigate } from "react-router-dom";

export const CadastroPage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const { cadastro, error } = useContext(CadastroContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    console.log(error);
    event.preventDefault(),
      cadastro(email, confirmEmail, password, confirmPassword);
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <Page>
      <Wrapper>
        <h1>CADASTRO DO SISTEMA</h1>
        <Form onSubmit={(e) => handleSubmit(e)} method={"post"}>
          <ContainerField>
            <label htmlFor="email">E-mail:</label>
            <input
              autoComplete="true"
              type="email"
              id="email"
              placeholder="e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </ContainerField>
          <ContainerField>
            <label htmlFor="ConfirmarEmail">Confirmar e-mail:</label>
            <input
              autoComplete="true"
              type="email"
              id="ConfirmarEmail"
              placeholder="confirmar e-mail"
              value={confirmEmail}
              onChange={(event) => setConfirmEmail(event.target.value)}
              required
            />
          </ContainerField>
          <ContainerField>
            <label htmlFor="ConfirmarPassword">Senha:</label>
            <input
              type="password"
              name="ConfirmarPassword"
              id="ConfirmarPassword"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="senha"
              required
            />
          </ContainerField>
          <ContainerField>
            <label htmlFor="password">Confirmar senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="confirmar senha"
              required
            />
          </ContainerField>
          <Button
            backgroundcolor="var(--buttonEnter)"
            type={"submit"}
            id={"btnSubmit"}
            name={"btnSubmit"}
            value={"Cadastrar"}
          />
        </Form>
        {!error && (
          <span style={{ color: "transparent", marginBottom: "20px" }}>
            #gambiarra#
          </span>
        )}
        {error && (
          <span style={{ color: "var(--error)", marginBottom: "20px" }}>
            {error}
          </span>
        )}
      </Wrapper>
    </Page>
  );
};
