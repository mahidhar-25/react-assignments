import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const TitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const GetFormData = (event) => {
    event.preventDefault();
    const expensedetails = {title , amount , date : new Date(date)};
    props.onSaveExpenseData(expensedetails);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={GetFormData}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label> Title </label>
          <input type="text" value={title} onChange={TitleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label> Price </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
