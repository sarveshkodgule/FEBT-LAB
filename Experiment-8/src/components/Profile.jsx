import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const user = useContext(UserContext);
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Branch:</strong> {user.branch}</p>
    </div>
  );
}

export default Profile;
