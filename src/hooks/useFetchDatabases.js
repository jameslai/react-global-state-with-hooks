import { useStateValue } from "../StateProvider/StateProvider";

export default function useFetchDatabases() {
  const [{ databases }, dispatch] = useStateValue();

  const fetchDatabases = () => {
    return fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(databases => {
        dispatch({ type: "RECEIVE_DATABASES", payload: databases });
      });
  };
  return [databases, fetchDatabases];
}
