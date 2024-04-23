import { useContext } from "react";
import { userContext } from "./context/UserContext";
export const HomePage = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <h1>Home Page</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
