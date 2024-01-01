import "./App.css";
import Expenses from "./components/expenses/Expenses";
import React, { useState } from "react";
import ExpenseList from "./components/expenses/ExpenseObj";
import Newexpenses from "./components/inputFeature/NewExpense";

function App() {

  const [newList, setNewList] = useState(ExpenseList)

  const addExpenseHandler = (expensesdata) => {
    
    setNewList((prevState) => {return [...prevState, {...expensesdata}]})
    console.log({...expensesdata});
  };
  
  console.log(newList);
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Newexpenses addExpenseHandler={addExpenseHandler} />
      <Expenses expenselist={newList} />
    </div>
  );
}

export default App;