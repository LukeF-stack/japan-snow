import React, { useContext } from "react";
import "../App.css";
import { UserContext } from "./UserContext";

function FavBtn(props) {
  const { user } = useContext(UserContext);
  const favsBody = { favs_destinations: props.id };
  const addToFavs = async () => {
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(favsBody)
    };
    try {
      const url = new URL(
        `https://5sx1m.sse.codesandbox.io/api/users/${user._id}`
      );

      console.log("id is ", user._id, "body is", favsBody);
      //const params = { id: user.id };
      //url.search = new URLSearchParams(params).toString();
      const response = await fetch(url, settings);
      console.log(JSON.parse(response));
    } catch {}
  };
  return (
    <div>
      {user.authenticated ? (
        <button className="fav-btn" onClick={addToFavs}></button>
      ) : null}
    </div>
  );
}

export default FavBtn;
