import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";
function Profile() {
  return (
    <div className="profile">
      <div className="menus">
        <Link to="pdetails">Personal Details</Link>
        <Link to="orders">Orders</Link>
        <Link to="payments">Payments</Link>
        <Link to="use-ref">useRef Hook</Link>
        <Link to="cpassword">Change Password</Link>
        <Link to="logout">Logout</Link>
      </div>
      <div className="components">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
