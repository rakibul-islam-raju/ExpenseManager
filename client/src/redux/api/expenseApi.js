import { baseApi } from "./baseApi";

export const expenseApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getExpenseList: builder.mutation({
			query: () => ({
				url: "expenses",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetExpenseListMutation } = expenseApi;
