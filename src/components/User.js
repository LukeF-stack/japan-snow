import "../App.css";
//import { useContext, useEffect } from "react";
//import { UserContext } from "./UserContext";

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
  },
  validateUser: () => {
    if (localStorage.getItem("token")) {
      fetch("https://5sx1m.sse.codesandbox.io/api/auth/validate", {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      })
        .then((res) => {
          if (res.status !== 200) {
            localStorage.removeItem("token");
            User.props.authenticated = false;
            window.location.hash = "signin";
            console.log("token not valid");
          } else {
            res.json().then((res) => {
              console.log("User authorised");
              User.props.authenticated = true;
              User.props.fullName = res.user.fullName;
              User.props.email = res.user.email;
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("No local token, please sign in");
      window.location.hash = "#signin";
    }
  }
};
/*
function SetUserContext() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(User.props);
    //console.log(user);
  }, [user, setUser]);
  return null;
}*/

//export default SetUserContext;
export { User };
