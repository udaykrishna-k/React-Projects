import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "React Course", amount: 0.0, date: new Date() },
    { title: "Earphones", amount: 4000, date: new Date() },
    { title: "Flight Tickets", amount: 13000, date: new Date() },
  ];
  return (
    <>
      <Expenses expenses={expenses}></Expenses>
    </>
  );
};

export default App;
