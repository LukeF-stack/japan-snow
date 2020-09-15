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
    console.log(User);
  }
};

function SetUserContext() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(User.props);
    //console.log(user);
  });
  return null;
}

export default SetUserContext;
export { User };
