import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from "./slices/authSlice";
import expenseReducer from "./slices/expenseSlice";

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		auth: authReducer,
		expense: expenseReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
	devTools: true,
});
