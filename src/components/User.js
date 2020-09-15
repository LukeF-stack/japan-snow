import "../App.css";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

const User = {
  props: {
    fullName: "",
    email: "",
    authenticated: false
  },

  storeUser: (data) => {
    User.props.fullName = data.user.fullName;
    User.props.email = data.user.email;
    User.props.authenticated = true;
    //console.log(User.props);
  }
};

function SetUserContext() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(User.props);
    console.log(user);
  }, [user, setUser]);
  return null;
}

export default SetUserContext;
export { User };
