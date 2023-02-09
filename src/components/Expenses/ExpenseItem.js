import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const { id, title, amount, date } = props;
  return (
    <Card className="expense_item" key={id}>
      <ExpenseDate date={date} />
      <div className="expense_title">{title}</div>
      <Card className="expense_money">{amount}</Card>
    </Card>
  );
}

export default ExpenseItem;
