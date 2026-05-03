import axios from "axios";
const url = "http://localhost:5001/api/auth/sign-up";
import { toast } from "react-toastify";

export const getUserData = (username, email, password, confirmPassword) => {
  const newuser = {
    username: username.current.value,
    email: email.current.value,
    password: password.current.value,
    confirmPassword: confirmPassword.current.value,
  };

  axios
    .post(url, newuser)
    .then((res) => {
      console.log(res);
      // alert("Account created");
      toast.success("Account Created Successfuly");
    })
    .catch((error) => {
      toast.error("failed to create account");
      console.log(error);
    });
};
