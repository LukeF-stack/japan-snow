import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";

function FavBtn() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user.authenticated ? <button className="fav-btn"></button> : null}
    </div>
  );
}

export default FavBtn;
