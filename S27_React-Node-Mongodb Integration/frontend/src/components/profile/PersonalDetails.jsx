import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <section className="profile-section personal-details">
      <div className="profile-header">
        <div>
          <h2>Personal Details</h2>
          <p className="section-subtitle">Review your profile information and contact details.</p>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <h3>Profile Info</h3>
          <div className="detail-row">
            <span>Name</span>
            <strong>John Doe</strong>
          </div>
          <div className="detail-row">
            <span>Email</span>
            <strong>john.doe@example.com</strong>
          </div>
          <div className="detail-row">
            <span>Phone</span>
            <strong>+1 (555) 123-4567</strong>
          </div>
        </div>

        <div className="detail-card">
          <h3>Billing Address</h3>
          <p>1984 Elm Street</p>
          <p>Suite 600</p>
          <p>San Francisco, CA 94107</p>
          <p>United States</p>
        </div>

        <div className="detail-card highlight-card">
          <h3>Account Status</h3>
          <div className="status-pill active">Active</div>
          <div className="detail-row">
            <span>Membership</span>
            <strong>Premium</strong>
          </div>
          <div className="detail-row">
            <span>Last Login</span>
            <strong>April 2, 2026</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;