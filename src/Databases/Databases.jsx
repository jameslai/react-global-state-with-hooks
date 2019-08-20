import React, { useEffect } from "react";
import useFetchDatabases from "../hooks/useFetchDatabases";

export const Databases = () => {
  const [databases, fetchDatabases] = useFetchDatabases();

  useEffect(() => {
    fetchDatabases();
  }, []);

  console.log("Rendering databases");

  return (
    <ul>
      {databases.map(database => {
        return <li key={database.id}>{database.title}</li>;
      })}
    </ul>
  );
};
