import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };
  const dateString = props.date.toLocaleDateString("en-US", dateOptions);
  const [month, day, year] = dateString.split(" ");
  return (
    <div className="item_date">
      <div className="item_month">{month.slice(0, 3)}</div>
      <div className="item_year">{year}</div>
      <div className="item_day">{day.slice(0, -1)}</div>
    </div>
  );
}

export default ExpenseDate;
