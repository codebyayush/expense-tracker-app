import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  //using useState method to update the list after deleteExpense() is called.
  const [expenses, setExpenses] = useState(props.expenselist);
  console.log(expenses, props.expenselist);

  //here only the props.expenselist is getting updated not the expenses
  //now to update the expenses whenever props.expenselist changes we'll make use of useEffect method.
  //this will make sure every time the state of props.expenselist changes we'll update the setExpenses.
  useEffect(() => {
      setExpenses(props.expenselist)
    }, [props.expenselist])

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