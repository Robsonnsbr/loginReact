import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Page, Wrapper, Button } from "../../components";

export const HomePage = () => {
  const { logout, deleteUser } = useContext(AuthContext);

  const handleDeleteUser = () => {
    deleteUser();
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <Page>
      <Wrapper>
        <h1>HOME</h1>
        <Button
          backgroundcolor="var(--buttonDelete)"
          type={"button"}
          id={"btnDeleteUser"}
          value={"deleteUser"}
          onClick={handleDeleteUser}
        ></Button>
        <Button
          backgroundcolor="var(--buttonDelete)"
          type={"button"}
          id={"btnLogout"}
          value={"Logout"}
          onClick={handleLogout}
        ></Button>
      </Wrapper>
    </Page>
  );
};
