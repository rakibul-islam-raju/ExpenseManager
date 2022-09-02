import { baseApi } from "./baseApi";

export const expenseApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getExpenseList: builder.mutation({
			query: () => ({
				url: "expenses",
				method: "GET",
			}),
		}),
		createExpense: builder.mutation({
			query: (data) => ({
				url: "expenses",
				method: "POST",
				body: { ...data },
			}),
		}),
	}),
});

export const { useGetExpenseListMutation, useCreateExpenseMutation } =
	expenseApi;
