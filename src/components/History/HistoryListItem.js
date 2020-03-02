import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const HistoryListItem = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.amount > 0 ? "+" : "-";
	return (
		<div className="list">
			<li className={sign === "-" ? "minus" : "plus"}>
				{transaction.text}{" "}
				<span>
					{sign}${Math.abs(transaction.amount)}{" "}
				</span>
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className="delete-btn"
				>
					x
				</button>
			</li>
		</div>
	);
};
export default HistoryListItem;
