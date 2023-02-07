import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
    const { id, title, amount, date } = props;
  return (
    <div className="expense_item" key={id}>
      <ExpenseDate date={date}/>
      <div className="expense_title">{title}</div>
      <div className="expense_money">{amount}</div>
    </div>
  );
}

export default ExpenseItem;
