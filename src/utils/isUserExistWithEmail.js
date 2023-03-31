const userExist = (newUseremail, users) => {
  const found = users.find(({ email }) => email === newUseremail);
  return found;
};
export default userExist;