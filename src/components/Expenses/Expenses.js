import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const expenses = props.items;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p> no expenses found </p>;

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
  };
  return (
    <div>
      <Card className="expense_container">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
