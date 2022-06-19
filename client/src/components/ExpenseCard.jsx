import React from "react";
import "./ExpenseCard.css";

import image from "../assets/circles.png";

const ExpenseCard = () => {
  return (
    <div className="card__container">
      <div></div>
      <div className="card">
        <div className="balance__bar">
          <div className="balance__section">
            <p>My balance</p>
            <h1>$000.00</h1>
          </div>
          <img src={image} alt="logo" className="logo" />
        </div>
        <div className="expense__card">
          <h3>Spending - Last 7 days</h3>
          <div className="footer">
            <div className="monthly">
              <p>Total this month</p>
              <h1>$000.00</h1>
            </div>
            <div className="last__month">
              <h4>+2.4%</h4>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ExpenseCard;
