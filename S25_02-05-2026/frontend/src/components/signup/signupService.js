import axios from "axios";
const url = "http://localhost:4747/api/users/sign-up";
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
      alert("Account created");
    })
    .catch((error) => {
      alert("Failed to create account");
      console.log(error);
    });
};
