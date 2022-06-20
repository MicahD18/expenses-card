import React, { useState, useEffect } from "react";
import axios from "axios";

import { weekExpenses } from "./data/weekData";

import "./ExpenseCard.css";

import image from "../assets/circles.png";

const ExpenseCard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Err: ", err));
  }, []);

  return (
    <div className="card__container">
      <div></div>
      <div className="card">
        <div className="balance__bar">
          <div className="balance__section">
            <p>My balance</p>
            <h1>$11,962.50</h1>
          </div>
          <img src={image} alt="logo" className="logo" />
        </div>
        <div className="expense__card">
          <h3>Spending - Last 7 days</h3>

          <div className="week__expense">
            {weekExpenses.map((expense) => (
              <div className="week__expense-content">
                <h4>${expense.amount}</h4>
                <p>{expense.day}</p>
              </div>
            ))}
          </div>

          <div className="footer">
            <div className="monthly">
              <p>Total this month</p>
              <h1>$263.39</h1>
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
