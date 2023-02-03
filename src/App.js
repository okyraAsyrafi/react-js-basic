import './App.css';
import Expense from './component/expenses/Expense';
import NewExpenses from './component/newExpenses/NewExpenses';

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),

    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 295,
      date: new Date(2021, 3, 14),

    },
    {
      id: "e3",
      title: "Toilet CLay",
      amount: 94.122,
      date: new Date(2021, 2, 24),

    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 394.12,
      date: new Date(2022, 4, 11),

    },
  ];
  return (
    <div >
      <h2>Let's get started!</h2>
      <NewExpenses/>
      <Expense items={expense} />
    </div>
  );
}

export default App;
