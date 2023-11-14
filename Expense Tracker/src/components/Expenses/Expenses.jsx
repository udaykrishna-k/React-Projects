import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
