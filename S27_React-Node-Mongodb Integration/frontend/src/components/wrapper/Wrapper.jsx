import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home.jsx";
import Profile from "../profile/Profile";
import Products from "../products/Products.jsx";
import PersonalDetails from "../profile/PersonalDetails";
import Orders from "../profile/Orders";
import Payments from "../profile/Payments";
import A from "../profile/context-api/A";
import UseRefComp from "../profile/UseRefComp";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import Contactus from "../contactus/Contactus";
import ChangePassword from "../profile/ChangePassword";
import Name from "../../redux/components/Name.jsx";
import Details from "../../redux/components/Details.jsx";
import Counter from "../use-reducer/Counter.jsx";

function Wrapper({ isLoggedIn }) {
  return (
    <Routes>
      <Route path={"/"} element={isLoggedIn ? <Home /> : <Signin />} />
      <Route path={"/products"} element={<Products />} />
      <Route
        path={"/redux"}
        element={
          <>
            <Name />
            <hr />
            <hr />
            <Details />
          </>
        }
      />
      <Route path={"/profile"} element={<Profile />}>
        <Route path="" element={<PersonalDetails />} />
        <Route path={"pdetails"} element={<PersonalDetails />} />
        <Route path={"orders"} element={<Orders />} />

        <Route path="context-api" element={<A />} />

        <Route path="use-reducer" element={<Counter />} />
        <Route path={"payments"} element={<Payments />} />
        <Route path={"cpassword"} element={<ChangePassword />} />
      </Route>

      <Route path={"/contactus"} element={<Contactus />} />
      <Route path={"/signup"} element={<Signup />} />
    </Routes>
  );
}

export default Wrapper;
