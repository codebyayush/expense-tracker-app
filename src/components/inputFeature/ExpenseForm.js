import Card from "../UI/Card";
// import Expenses from "../expenses.js";
import "./ExpenseForm.css";
import React, { useState } from "react";

export default function Inputs(props) {
  const [newtitle, setTitle] = useState("");
  const [newlocation, setLocation] = useState("");
  const [newdate, setDate] = useState("");
  const [newprice, setPrice] = useState("");

  // const [userInput, setUserInput] = useState({
  //     title: '',
  //     location: '',
  //     date: '',
  //     price: ''
  // })

  function inputTextHandler(event) {
    //whenever the state update depends upon the previous state use this method of anonymous function avoid direct assigning.
    // setTitle((prevState) => {return {...prevState, title: event.target.value}})
    setTitle(event.target.value);
  }

  function inputLocationHandler(event) {
    setLocation(event.target.value);
  }

  function inputPriceHandler(event) {
    setPrice(event.target.value);
  }

  function inputDateHandler(event) {
    setDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let newObj = {
      title: newtitle,
      location: newlocation,
      date: new Date(newdate),
      amount: newprice,
    };

    props.newExpdataOnSave(newObj);
    setTitle("");
    setDate("");
    setLocation("");
    setPrice("");
  };

  return (
    <>
      <form action="#" onSubmit={submitHandler}>
        <Card className="input-details">
          <label htmlFor="title" className="textNames">
            Expense Title:
          </label>
          <input
            className="inputClass"
            type="text"
            name="title"
            value={newtitle}
            onChange={inputTextHandler}
            id="title"
            required
          />
          <br />
          <label htmlFor="location" className="textNames">
            Location:
          </label>
          <input
            className="inputClass"
            type="text"
            name="location"
            value={newlocation}
            onChange={inputLocationHandler}
            id="location"
            required
          />
          <br />
          <label for="expenseDate" className="textNames">
            Date:
          </label>
          <input
            className="inputClass"
            type="date"
            id="dateofexpense"
            value={newdate}
            onChange={inputDateHandler}
            name="expenseDate"
            required
          />
          <br />
          <label for="expensePrice" className="textNames">
            Expense Price:
          </label>
          <input
            className="inputClass"
            type="number"
            id="expenseprice"
            value={newprice}
            onChange={inputPriceHandler}
            name="expensePrice"
            required
          />
          <br />
          <button type="submit" className="textNames" id="addBtn">
            Add Expense
          </button>
        </Card>
      </form>
    </>
  );
}
