import validatePassword from "../utils/validatePassword";

const validUser = (user, enteredPassword) => {
  if (!user) {
    return false;
  }
  const isValidPassword = validatePassword(user.password, enteredPassword);
  if (!isValidPassword) {
    return false;
  }
  return true;
};
export default validUser;
