import { useContext } from "react";
import { userContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        onClick={() => {
          setUser({ id: 1, name: "fran", email: "fran@gmail.com" });
        }}
        className="btn btn-primary"
      >
        Establecer Usuario
      </button>
    </>
  );
};
