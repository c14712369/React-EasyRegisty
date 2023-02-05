import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";

const initialData = [
  {
    id: "e1",
    title: "衛生紙",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "手機", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "浴巾",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "桌子",
    amount: 450,
    date: new Date(2021, 3, 17),
  },
  {
    id: "e5",
    title: "椅子",
    amount: 879,
    date: new Date(2020, 5, 10),
  },
  {
    id: "e6",
    title: "辦公椅",
    amount: 2300,
    date: new Date(2022, 4, 16),
  },
  {
    id: "e7",
    title: "電視螢幕",
    amount: 6500,
    date: new Date(2020, 9, 11),
  },
  {
    id: "e8",
    title: "衣櫃",
    amount: 4300,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e9",
    title: "拖鞋",
    amount: 120,
    date: new Date(2022, 8, 31),
  },
  {
    id: "e10",
    title: "瓦斯爐",
    amount: 450,
    date: new Date(2022, 11, 20),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />{" "}
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
