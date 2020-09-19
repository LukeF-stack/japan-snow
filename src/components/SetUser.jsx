import { useEffect, useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";

function SetUser(props) {
  const { userData } = props;
  userData["authenticated"] = true;
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(userData);
  }, [setUser, userData]);
  return null;
}

export default SetUser;
