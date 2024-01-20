import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id :1,
      title: "New TV",
      price: 1234,
      date: new Date(2023,10,15)
    },
    {
      id :2,
      title: "Education ",
      price: 5966,
      date: new Date(2024,10,15)
    },
    {
      id :3,
      title: "Voyade ",
      price: 7500,
      date: new Date(2025,11,15)
    },

  ]
  return (
    <div>
     <ExpenseItem   title={expenses[0].title}    date={expenses[0].date}    price={expenses[0].price}       />
     <ExpenseItem   title={expenses[1].title}    date={expenses[1].date}    price={expenses[1].price}      />
     <ExpenseItem  title={expenses[2].title}    date={expenses[2].date}    price={expenses[2].price}   />
     
    </div>
  );
}

export default App;
