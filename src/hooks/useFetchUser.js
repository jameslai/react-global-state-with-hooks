import { useStateValue } from "../StateProvider/StateProvider";

export default function useFetchUser() {
  const [{ user }, dispatch] = useStateValue();

  const fetchUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(user => {
        dispatch({ type: "RECEIVE_USER", payload: user });
      });
  };

  return [user, fetchUser];
}
