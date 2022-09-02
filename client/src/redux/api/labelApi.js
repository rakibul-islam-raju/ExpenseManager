import { baseApi } from "./baseApi";

export const labelApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getLabelList: builder.mutation({
			query: () => ({
				url: "labels",
				method: "GET",
			}),
		}),
		createLabel: builder.mutation({
			query: (data) => ({
				url: "labels",
				method: "POST",
				body: { ...data },
			}),
		}),
	}),
});

export const { useGetLabelListMutation, useCreateLabelMutation } = labelApi;
