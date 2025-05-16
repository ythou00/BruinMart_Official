export const loginUser = (userObj) => {
  localStorage.setItem("user", JSON.stringify(userObj));
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};