import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 3000,
      date: new Date(2023, 5, 12),
      location: "Indore",
    },
    {
      title: "New car",
      amount: 3000000,
      date: new Date(2023, 5, 12),
      location: "Pune",
    },
    {
      title: "Coconuts",
      amount: 2000,
      date: new Date(2023, 5, 1),
      location: "Hyderabad",
    },
    {
      title: "Chocolates",
      amount: 2500,
      date: new Date(2022, 8, 12),
      location: "Indore",
    },
  ];

  return (
    <>
    <div>
      {expenses.map((values, index) => (
        <ExpenseItem
        key = {index}
        itemName={values.title}
        itemPrice={values.amount}
        locationOfExpenditure={values.location}
        dateOfExpenditure={values.date}
      />
      ))}
    </div>
    </>
  );
}

export default App;
