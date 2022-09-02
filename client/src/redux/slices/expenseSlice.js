import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
	name: "expense",
	initialState: { expenses: [], count: 0, next: null, previous: null },
	reducers: {
		setExpenses: (state, { payload }) => {
			const { results, count, next, previous } = payload;
			state.expenses = results;
			state.count = count;
			state.next = next;
			state.previous = previous;
		},
	},
});

export default expenseSlice.reducer;

export const { setExpenses } = expenseSlice.actions;

export const selectAllExpenses = (state) => state.expense.expenses;
