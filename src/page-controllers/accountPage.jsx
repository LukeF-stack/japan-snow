import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "../components/UserContext";
import SetUserContext from "../components/User";

function AccountPage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="page-title">Account</h1>
      <SetUserContext />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default AccountPage;
