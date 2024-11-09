import React, { useContext } from "react";
import { DataContext } from "./UserContext";
function UserDetails() {
  let Data = useContext(DataContext);
  return (
    <div>
      <p>Name: {Data.name}</p>
      <p>Email: {Data.email}</p>
    </div>
  );
}

export default UserDetails;
