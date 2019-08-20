export default (databases, action) => {
  switch (action.type) {
    case "RECEIVE_DATABASES":
      return action.payload;
    default:
      return databases;
  }
};
