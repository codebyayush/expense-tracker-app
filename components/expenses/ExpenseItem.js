import Card from "../UI/Card.js";
import Expensedate from "./Expensedate";
import Expensedetails from "./Expensedetails";
import "./ExpenseItem.css";
import React from 'react';

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Expensedate date={props.dateOfExpenditure} />
      <Expensedetails
        amount={props.itemPrice}
        location={props.locationOfExpenditure}
        title={props.itemName}
      />
    </Card>
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
