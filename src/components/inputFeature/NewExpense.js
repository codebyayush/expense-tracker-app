import Inputs from "./ExpenseForm"
import React, { useState } from 'react'


export default function Newexpenses(props) {
    const [isEditing, setisEditing] = useState(false);
        
    const newExpdata = (newobj) => {
            const expenseData = {
                    ...newobj,
                    id: Math.random().toString()
            }
            //lifting the state up of expenseData
            props.addExpenseHandler(expenseData);
    }

    const startEditingHandler = () => {
        setisEditing(true)
    }
    
    const stopEditingHandler = () => {
        setisEditing(false)
    }
    

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
            {isEditing && <Inputs newExpdataOnSave = {newExpdata} onCancel = {stopEditingHandler}/>}
        </div>
    )
}