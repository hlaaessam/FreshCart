import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  // let { userData } = useContext(UserContext);

  let [userData, setUserData] = useState([]);

  async function getUsers() {
    let data = await axios.get("http://localhost:3000/users");

    data = data.data.filter((obj) => obj.token === localStorage.userToken);

    setUserData(data);
  }

  console.log(userData);

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>Name: {userData[0]?.name}</h1>
      <h1>Email: {userData[0]?.email}</h1>
    </>
  );
}
