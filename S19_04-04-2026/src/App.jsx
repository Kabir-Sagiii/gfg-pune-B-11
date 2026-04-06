import "./App.css";
import { Home } from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Contactus from "./components/contactus/Contactus.jsx";
import Signin from "./components/signin/Signin.jsx";
import Signup from "./components/signup/Signup.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile.jsx";
import PersonalDetails from "./components/profile/PersonalDetails.jsx";
import Orders from "./components/profile/Orders.jsx";
import Payments from "./components/profile/Payments.jsx";
import ChangePassword from "./components/profile/ChangePassword.jsx";
import UseRefComp from "./components/profile/UseRefComp.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/signin"} element={<Signin />} />

        <Route path={"/profile"} element={<Profile />}>
          <Route path="" element={<PersonalDetails />} />
          <Route path={"pdetails"} element={<PersonalDetails />} />
          <Route path={"orders"} element={<Orders />} />
          <Route path="use-ref" element={<UseRefComp />} />
          <Route path={"payments"} element={<Payments />} />
          <Route path={"cpassword"} element={<ChangePassword />} />
        </Route>

        <Route path={"/contactus"} element={<Contactus />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
