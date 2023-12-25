import "./ExpenseItem.css";

export default function Expensedate(props){

    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear();
    
    return(
        <div className="expense-item">
                  <div>
                    <div>{month} {year} {day}</div>
                  </div>
        </div>
    );
}