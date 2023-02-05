import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    // setUserInput({ ...userInput, enteredTitle: e.target.value });
    setEnteredTitle(e.target.value);
  };

  // const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
    setEnteredAmount(e.target.value);
  };

  // const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onsaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>項目名稱</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>價格</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>消費日期</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">新增支出</button>
        <button type="button" onClick={props.onCancel}>
          取消
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
