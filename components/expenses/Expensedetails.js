import Card from "../UI/Card";
import "./ExpenseItem.css";
import React from 'react'

export default function Expensedetails(props) {
  return (
    <Card className="expense-item"> 
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}