import React, { useEffect } from "react";
import useFetchUser from "../hooks/useFetchUser";

export const User = () => {
  const [user, fetchUser] = useFetchUser();

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("Rendering user");

  return <p>User: {user.name}</p>;
};
