import React, {useState} from "react";
import Expenses from "./components/ExpensesList/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const InitialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; 
 
function App() {
  
  const [expenses, setExpenses] = useState(InitialExpenses)

  const addExpenseHandler = exp => {
    setExpenses((prevExpenses) => {
      return [exp, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <button style={{ display: "flex", margin: "auto"}} onClick={onDelete}>Delete Item From Array</button>
      {/* prototype of deleting */}
    </div>
  );
}

export default App;
