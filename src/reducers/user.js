export default (user, action) => {
  switch (action.type) {
    case "RECEIVE_USER":
      return action.payload;
    default:
      return user;
  }
};
