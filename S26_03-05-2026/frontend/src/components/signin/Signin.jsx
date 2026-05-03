import { useContext, useState } from "react";
import "./Signin.css";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:5001/api/auth/sign-in";

const Signin = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const login = useContext(AuthContext);

  const handleForm = () => {
    setState({ ...state, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  const Signin = () => {
    axios
      .post(url, state)
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully Logged In");
        localStorage.setItem("token", res.data.token);
        login();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message); //minor change you have to do
      });
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleForm}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleForm}
            />
          </div>
          <button onClick={Signin} type="button" className="signin-btn">
            Sign In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
