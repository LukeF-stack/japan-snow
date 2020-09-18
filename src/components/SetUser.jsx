import React, { useEffect, useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";

function SetUser(props) {
  const { userData } = props;
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(userData);
  }, [setUser, userData]);
  return (
    <div>
      <h4>{JSON.stringify(user)}</h4>
    </div>
  );
}

export default SetUser;
