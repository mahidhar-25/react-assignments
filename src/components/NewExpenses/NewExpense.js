import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
         const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
         };
         props.onGetExpenseItem(expenseData);
        //  console.log(expenseData);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
