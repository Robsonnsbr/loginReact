import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id?: string;
  email?: string;
  password?: string;
  token?: string;
};

interface IPropsAuth {
  error: null | string;
  cadastro: (
    email: string,
    password: string,
    confirmEmail: string,
    confirmPassword: string
  ) => void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

const initialProps: IPropsAuth = {
  error: null,
  cadastro: () => {
    throw new Error("Function not implemented.");
  },
};

export const CadastroContext = createContext<IPropsAuth>(initialProps);

export const CadastroProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState<null | string>(null);

  const cadastro = async (
    email: string,
    confirmEmail: string,
    password: string,
    confirmePassword: string
  ) => {
    if (email === confirmEmail && password === confirmePassword) {
      setError(null);
      console.log("os dados conferem!");
      const recoveredUsers = localStorage.getItem("users_db");

      if (recoveredUsers) {
        const hasRecoveredUsers = JSON.parse(recoveredUsers);
        const hasUser = hasRecoveredUsers.filter(
          (user: User) => user.email === email
        );

        if (hasUser.length > 0) {
          return setError("Email já cadastrado!");
        }
      }

      if (recoveredUsers) {
        const parsedRecoveredUsers = JSON.parse(recoveredUsers);
        parsedRecoveredUsers.push({ email, password });
        localStorage.setItem("users_db", JSON.stringify(parsedRecoveredUsers));

        console.log("Mais um usuários cadastrado!");
      } else {
        localStorage.setItem("users_db", JSON.stringify([{ email, password }]));
        console.log("Novo Usuário Cadastrado!");
      }
      alert("Sucesso no cadastro!");
      return navigate("/login");
    } else {
      return setError("Os dados informados não conferem!");
    }
  };

  return (
    <CadastroContext.Provider
      value={{
        error,
        cadastro,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};
