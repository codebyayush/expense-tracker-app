import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseList from "./ExpenseObj.js";

export default function Expenses(props) {
  //using useState method to update the list after deleteExpense() is called.
  const [expenses, setExpenses] = useState(ExpenseList);

  // Function to delete expenses, it takes expenseID to filter the element.
  const deleteExpense = (expenseID) => {
    const updatedExpense = expenses.filter(
      (expense) => expense.id !== expenseID
    );
    setExpenses(updatedExpense);
  };

  return (
    <>
      <Card className="expenses">
        {expenses.map((values) => (
          <ExpenseItem
            key={values.id}
            id={values.id}
            itemName={values.title}
            itemPrice={values.amount}
            locationOfExpenditure={values.location}
            dateOfExpenditure={values.date}
            deleteExpense={deleteExpense}
          />
        ))}
      </Card>
    </>
  );
}
