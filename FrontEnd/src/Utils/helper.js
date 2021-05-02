export const storeUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}