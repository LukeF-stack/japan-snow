import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";

function UserData() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>authenticated: {user ? JSON.stringify(user.authenticated) : null}</h2>
    </div>
  );
}

export default UserData;
