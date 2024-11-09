import React, { useContext, UserContext } from "react";
import { UserContext } from "./UserContext";
function UserDetails() {
  let Data = useContext(UserContext);
  return (
    <div>
      <p>Name: {Data.name}</p>
      <p>Email: {Data.email}</p>
    </div>
  );
}

export default UserDetails;
