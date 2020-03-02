import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { HistoryList } from "./components/History/HistoryList";
import { Transaction } from "./components/Transaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
	// const [income, setIncome] = useState(500);
	// const [expense, setExpense] = useState(0);
	// const [amount, setAmount] = useState(0);

	// //balance functions

	// // Transaction functions
	// const handleAmountChange = (e) => {
	// 	if (e.target.value.startsWith("-")) {
	// 	}
	// 	setAmount(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	setIncome(income - amount);
	// 	setExpense(expense + parseInt(amount));
	// 	e.preventDefault();
	// };

	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<HistoryList />
				<Transaction />
			</div>
		</GlobalProvider>
	);
};

export default App;
