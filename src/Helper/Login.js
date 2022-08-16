import axios from "axios";

export const LoginFunction = async (setAuth, setMessage, username) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const final = res.data.find((x) => x.username === username);
    if (!final) {
      return setMessage("user not found");
    }
    window.localStorage.setItem("user", JSON.stringify(final));
    return setAuth(final), setMessage("success");
  } catch (error) {
    setMessage(error);
  }
};
