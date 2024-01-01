import Inputs from "./ExpenseForm"
import React from 'react'


export default function Newexpenses(props) {
        
    const newExpdata = (newobj) => {
            const expenseData = {
                    ...newobj,
                    id: Math.random().toString()
            }
            //lifting the state up of expenseData
            props.addExpenseHandler(expenseData);
    }

    return(
        <div className="new-expense">
            <Inputs newExpdataOnSave = {newExpdata}/>
        </div>
    )
}