import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

export default function Expenses(props) {
  //using useState method to update the list after deleteExpense() is called.
  const [expenses, setExpenses] = useState(props.expenselist);
  const [fitleredYear, setFilteredYear] = useState("2020");

  // console.log(expenses, props.expenselist);
  //here only the props.expenselist is getting updated not the expenses
  //now to update the expenses whenever props.expenselist changes we'll make use of useEffect method.
  //this will make sure every time the state of props.expenselist changes we'll update the setExpenses.
  useEffect(() => {
    setExpenses(props.expenselist);
  }, [props.expenselist]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const updatedList = expenses.filter((expense) => {
    const dateYear = expense.date.getFullYear();
    const selectedDateYear = parseInt(fitleredYear);
    return dateYear === selectedDateYear;
  });

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
        <ExpenseFilter
          selected={fitleredYear}
          onChangeFilter={filterChangeHandler}
        />
        {updatedList.length === 0 ? (
          <p style={{color: 'white'}}>No Expense Found.</p>
        ) : updatedList.length === 1 ? (
          //we cannot use updatedlist.map and p tag at same time 
          //to achieve that we're wrapping the condition 
          //inside div tag.
          <div>
            {updatedList.map((values) => (
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
          <p style={{color: 'white'}}>Only single Expense here. Please add more...</p>
          </div>
        ) : (
          updatedList.map((values) => (
            <ExpenseItem
              key={values.id}
              id={values.id}
              itemName={values.title}
              itemPrice={values.amount}
              locationOfExpenditure={values.location}
              dateOfExpenditure={values.date}
              deleteExpense={deleteExpense}
            />
          ))
        )}
      </Card>
    </>
  );
}
