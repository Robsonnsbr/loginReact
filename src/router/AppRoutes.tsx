import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

import { CadastroPage, HomePage, LoginPage } from "../pages";
import { AuthProvider, AuthContext } from "../contexts/AuthContext";
import { CadastroProvider } from "../contexts/CadastroContext";
interface PrivateProps {
  children: React.ReactElement;
}

export const AppRoutes = () => {
  const Private = ({ children }: PrivateProps) => {
    const { isAuthenticated } = useContext(AuthContext);

    // if (loading) {
    //   console.log("Entrei aqui");
    //   //TODO: corrigir loading na pasta AuthContext..
    //   return <div>Em Carregamento...</div>;
    // }

    if (!isAuthenticated) {
      return <Navigate to="/Login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <CadastroProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="/cadastro" element={<CadastroPage />} />

            <Route
              path="*"
              element={
                <Private>
                  <HomePage />
                </Private>
              }
            />
          </Routes>
        </CadastroProvider>
      </AuthProvider>
    </Router>
  );
};
