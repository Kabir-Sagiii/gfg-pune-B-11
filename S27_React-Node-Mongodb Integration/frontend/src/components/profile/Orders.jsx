import React from "react";
import "./Orders.css";

const Orders = () => {
  return (
    <section className="profile-section orders-section">
      <div className="profile-header">
        <div>
          <h2>Order History</h2>
          <p className="section-subtitle">Recent purchases and shipment details.</p>
        </div>
      </div>

      <div className="orders-card">
        <div className="orders-table-header">
          <span>Order</span>
          <span>Date</span>
          <span>Total</span>
          <span>Status</span>
        </div>

        <div className="order-row">
          <span>#7841</span>
          <span>Mar 27, 2026</span>
          <span>$129.00</span>
          <span className="badge shipped">Shipped</span>
        </div>

        <div className="order-row">
          <span>#7820</span>
          <span>Mar 14, 2026</span>
          <span>$89.50</span>
          <span className="badge pending">Processing</span>
        </div>

        <div className="order-row">
          <span>#7783</span>
          <span>Feb 28, 2026</span>
          <span>$220.75</span>
          <span className="badge delivered">Delivered</span>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Pending Deliveries</h3>
          <p>2 orders are on their way to your address.</p>
        </div>
        <div className="summary-card">
          <h3>Total Spent</h3>
          <p>$5,240.45 over the last 12 months.</p>
        </div>
      </div>
    </section>
  );
};

export default Orders;