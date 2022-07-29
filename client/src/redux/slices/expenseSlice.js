import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
	name: "expense",
	initialState: { expenses: [] },
	reducers: {
		setExpenses: (state, action) => {
			const { results } = action.payload;
			state.expenses = results;
		},
	},
});

export default expenseSlice.reducer;

export const { setExpenses } = expenseSlice.actions;

export const selectAllExpenses = (state) => state.expense.expenses;
