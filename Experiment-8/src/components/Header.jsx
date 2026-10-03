import { useContext } from "react";
import UserContext from "../context/UserContext";

function Header() {
  const user = useContext(UserContext);
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Welcome, {user.name}</h2>
    </div>
  );
}

export default Header;
