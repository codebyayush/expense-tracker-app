import Card from "../UI/Card.js";
import Expensedate from "./Expensedate";
import Expensedetails from "./Expensedetails";
import "./ExpenseItem.css";
import React from "react";

export default function ExpenseItem(props) {
  //impnote: here props.deleteExpense is the function which is inside Expenses.js component.
  const deleteExpenseHandler = (itemID) => {
    props.deleteExpense(itemID);
  };

  return (
    <>
      <Card className="expense-item">
        <Expensedate date={props.dateOfExpenditure} />
        <Expensedetails
          amount={props.itemPrice}
          location={props.locationOfExpenditure}
          title={props.itemName}
        />
        <button
          type="button"
          className="delete-button"
          id="delBtn"
          onClick={() => {
            deleteExpenseHandler(props.id);
          }}
        >
          Delete
        </button>
      </Card>
    </>
  );

  {
    /* 
//   return (
//     <>
//       <div className="expense-item">
//         <h2>{props.dateOfExpenditure.toISOString()}</h2>
//         <div className="expense-item__description">
//           <h2>{props.itemName}</h2>
//           <h2>{props.locationOfExpenditure}</h2>
//           <div className="expense-item__price">Rs {props.itemPrice}</div>
//         </div>
//       </div>
//     </>
//   ); */
  }
}
