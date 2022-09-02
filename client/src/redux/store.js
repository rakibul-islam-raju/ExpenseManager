import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { expenseApi } from "./api/expenseApi";
import { labelApi } from "./api/labelApi";
import authReducer from "./slices/authSlice";
import expenseReducer from "./slices/expenseSlice";
import labelReducer from "./slices/labelSlice";

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[expenseApi.reducerPath]: expenseApi.reducer,
		[labelApi.reducerPath]: labelApi.reducer,
		auth: authReducer,
		expense: expenseReducer,
		label: labelReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
	devTools: true,
});
