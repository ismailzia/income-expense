import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = () => {
	const { addTransaction } = useContext(GlobalContext);

	const [amount, setAmount] = useState(0);
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount
		};
		addTransaction(newTransaction);
	};

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label>Text</label>
					<input
						type="text"
						placeholder="Enter text..."
						text={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						placeholder="Enter amount..."
						onChange={(e) => setAmount(e.target.value)}
						amount={amount}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};
