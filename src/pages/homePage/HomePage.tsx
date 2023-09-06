import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Page, Wrapper, Button } from "../../components";

export const HomePage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Page>
      <Wrapper>
        <h1>HOME</h1>
        <Button
          backgroundcolor="var(--buttonLogout)"
          type={"button"}
          id={"btnLogout"}
          value={"Logout"}
          onClick={handleLogout}
        ></Button>
      </Wrapper>
    </Page>
  );
};
