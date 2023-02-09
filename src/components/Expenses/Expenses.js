import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
    const expenses = props.items;
  return (
    <div>
      <Card className="expense_container">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses
