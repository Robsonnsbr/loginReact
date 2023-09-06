import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id?: string;
  email?: string;
  password?: string;
  token?: string;
};

interface IPropsAuth {
  isAuthenticated: boolean;
  token: string | null;
  session: boolean;
  loading?: boolean;
  error: null | string;
  login: (email: string, password: string) => void;
  cadastro: (
    email: string,
    password: string,
    confirmEmail: string,
    confirmPassword: string
  ) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

const initialProps: IPropsAuth = {
  isAuthenticated: false,
  error: null,
  token: null,
  session: false,
  loading: true,
  cadastro: () => {
    throw new Error("Function not implemented.");
  },
  login: () => {
    throw new Error("Function not implemented.");
  },
  logout: () => {
    throw new Error("Function not implemented.");
  },
};

export const AuthContext = createContext<IPropsAuth>(initialProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [session, setSession] = useState<boolean>(false);
  const [token, setToken] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    //O await aqui não tem necessidade, mas caso haja uma
    //chamada da api é assim que conseguimos utilizar o await
    //criando uma função async auto-invocável dentro do useEffect
    (async () => {
      const recoveredToken = await localStorage.getItem("token");
      const recoveredUser = await localStorage.getItem("users_db");
      setTimeout(() => {
        if (recoveredToken && recoveredUser) {
          const hasUser = JSON.parse(recoveredUser).filter(
            (user: User) => user.email === JSON.parse(recoveredToken).email
          );
          if (hasUser) {
            setToken(recoveredToken);
            navigate("/");
          }
        }
      }, 2000);
    })();
  }, []);

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
        const hasUser = hasRecoveredUsers.filter((user: User) => {
          console.log("banco:", user.email, "enviado:", email);
          return user.email === email;
        });

        if (hasUser.length > 0) {
          console.log("Email já cadastrado!");
          return "Email já cadastrado!";
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
      return;
    } else {
      setError("Os dados informados não conferem!");
    }
  };

  const login = async (email: string, password: string) => {
    const recoveredUsers = localStorage.getItem("users_db");
    console.log(recoveredUsers);
    if (recoveredUsers) {
      const hasRecoveredUsers = JSON.parse(recoveredUsers);
      const hasUser = hasRecoveredUsers.filter(
        (user: User) => user.email === email
      );
      if (hasUser.length) {
        if (hasUser[0].email === email && hasUser[0].password === password) {
          const token = Math.random().toString(36).substring(2);
          localStorage.setItem("token", JSON.stringify({ email, token }));
          setToken(token);
          navigate("/");
          console.log("SUCESSO!");
          return;
        } else {
          console.log("Email ou senha incorretos");
          return "Email ou senha incorretos";
        }
      } else {
        console.log("Usuário não cadastrado");
        return "Usuário não cadastrado";
      }
    }
  };

  const logout = () => {
    setSession(false);
    setToken(null);
    // api.defaults.headers.Authorization = null; apenas no caso de api
    localStorage.removeItem("users_db"); //TODO: aplicar fix para limpar apenas o usuário atual...
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        session,
        error,
        cadastro,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
