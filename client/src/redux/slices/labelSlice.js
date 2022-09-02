import { createSlice } from "@reduxjs/toolkit";

const labelSlice = createSlice({
	name: "label",
	initialState: { labels: [], count: 0, next: null, previous: null },
	reducers: {
		setLabels: (state, { payload }) => {
			console.log("payload =>", payload);
			const { results, count, next, previous } = payload;
			state.labels = results;
			state.count = count;
			state.next = next;
			state.previous = previous;
		},
	},
});

export default labelSlice.reducer;

export const { setLabels } = labelSlice.actions;

export const selectAllLabels = (state) => state.label.labels;
