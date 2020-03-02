export default (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				Transactions: state.Transactions.filter(
					(transaction) => transaction.id !== action.playLoad
				)
			};
		case "ADD_TRANSACTION":
			return {
				...state,
				Transactions: [action.playLoad, ...state.Transactions]
			};
		default:
			return state;
	}
};
