import { useEffect, useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";

function SignInUser(props) {
  const { userData } = props;
  userData["authenticated"] = true;
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    setUser(userData);
    history.push("/");
  }, [setUser, userData, history]);
  return null;
}

export default SignInUser;
