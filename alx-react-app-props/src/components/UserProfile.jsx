import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  let data = useContext(UserContext);
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{data.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{data.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
export default UserProfile;
