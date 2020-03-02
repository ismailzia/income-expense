import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	Transactions: []
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			playLoad: id
		});
	}
	function addTransaction(Transactions) {
		dispatch({
			type: "ADD_TRANSACTION",
			playLoad: Transactions
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				Transactions: state.Transactions,
				deleteTransaction,
				addTransaction
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
