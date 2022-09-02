import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../slices/authSlice";

const refreshToken = JSON.parse(localStorage.getItem("expm_refreshToken"));

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_BASE_URL,
	prepareHeaders: (headers, { getState }) => {
		headers.set("Content-Type", "application/json");
		const token = getState().auth.accessToken;
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraoptions) => {
	let result = await baseQuery(args, api, extraoptions);
	if (result?.error?.status === 401) {
		// send refresh token to get a new access token
		const refreshResult = await baseQuery(
			{
				url: "accounts/token/refresh/",
				method: "POST",
				body: { refresh: refreshToken },
			},
			api,
			extraoptions
		);
		console.log("refreshResult =>", refreshResult);
		if (refreshResult?.data) {
			const user = api.getState().auth.user;
			// store the new token
			api.dispatch(
				setCredentials({
					accessToken: refreshResult.access,
					refreshToken: refreshResult.refresh,
					user: {
						email: refreshResult.email,
						first_name: refreshResult.first_name,
						last_name: refreshResult.last_name,
						is_staff: refreshResult.is_staff,
						is_superuser: refreshResult.is_superuser,
					},
				})
			);
			// retry the original query with new access token
			result = await baseQuery(args, api, extraoptions);
		} else {
			api.dispatch(logout());
		}
	}

	return result;
};

export const baseApi = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
});
