import React from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <section className="profile-section change-password-section">
      <div className="profile-header">
        <div>
          <h2>Change Password</h2>
          <p className="section-subtitle">Update your account security settings.</p>
        </div>
      </div>

      <div className="password-card">
        <div className="input-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" placeholder="Enter current password" />
        </div>
        <div className="input-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" placeholder="Create a new password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Re-enter new password" />
        </div>
        <button type="button" className="update-password-btn">Update Password</button>
      </div>
    </section>
  );
};

export default ChangePassword;