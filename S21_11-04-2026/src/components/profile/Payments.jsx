import React from "react";
import "./Payments.css";

const Payments = () => {
  return (
    <section className="profile-section payments-section">
      <div className="profile-header">
        <div>
          <h2>Payment Methods</h2>
          <p className="section-subtitle">Manage saved cards and billing notes.</p>
        </div>
      </div>

      <div className="payment-grid">
        <div className="payment-card card-primary">
          <div className="card-top">
            <span className="card-chip" />
            <span className="card-type">VISA</span>
          </div>
          <div className="card-number">**** **** **** 7831</div>
          <div className="card-footer">
            <span>John Doe</span>
            <span>12/28</span>
          </div>
        </div>

        <div className="payment-card card-secondary">
          <div className="card-top">
            <span className="card-chip" />
            <span className="card-type">Mastercard</span>
          </div>
          <div className="card-number">**** **** **** 4420</div>
          <div className="card-footer">
            <span>John Doe</span>
            <span>09/27</span>
          </div>
        </div>
      </div>

      <div className="billing-summary">
        <div className="billing-card">
          <h3>Latest Invoice</h3>
          <p className="billing-amount">$78.40</p>
          <p className="billing-note">Paid on March 28, 2026</p>
        </div>
        <div className="billing-card">
          <h3>Next Payment</h3>
          <p className="billing-amount">$99.00</p>
          <p className="billing-note">Due on April 15, 2026</p>
        </div>
      </div>
    </section>
  );
};

export default Payments;