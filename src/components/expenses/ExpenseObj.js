
function ExpenseList(){
  
  return (      
        [{ 
          id: 0,
          title: "Car insurance",
          amount: 3000,
          date: new Date(2022, 5, 12),
          location: "Indore",
        },
        { 
          id: 1,
          title: "New car",
          amount: 3000000,
          date: new Date(2022, 5, 12),
          location: "Pune",
        },
        { 
          id: 2,
          title: "Coconuts",
          amount: 2000,
          date: new Date(2021, 6, 1),
          location: "Hyderabad",
        },
        { 
          id: 3,
          title: "Chocolates",
          amount: 2500,
          date: new Date(2021, 8, 12),
          location: "Indore",
        },]
  )
}

export default ExpenseList;