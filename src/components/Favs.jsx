import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";

function Favs() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h3>{user.fullName}</h3>
    </div>
  );
}

export default Favs;
