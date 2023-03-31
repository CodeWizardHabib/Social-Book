const userExist = (newUseremail, users) => {
  const found = users.find((user) => user.email === newUseremail);
  return found;
};
export default userExist;