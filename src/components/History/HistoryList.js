import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import HistoryListItem from "./HistoryListItem";

export const HistoryList = () => {
	const { Transactions } = useContext(GlobalContext);
	return (
		<div>
			<h3>History</h3>
			{Transactions.map((transaction) => (
				<HistoryListItem key={transaction.id} transaction={transaction} />
			))}
		</div>
	);
};
