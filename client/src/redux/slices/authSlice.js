import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, accessToken: null, refreshToken: null },
	reducers: {
		setCredentials: (state, action) => {
			const { access, refresh } = action.payload;
			const userData = jwt_decode(access);
			state.accessToken = access;
			state.refreshToken = refresh;
			state.user = {
				email: userData.email,
				first_name: userData.first_name,
				last_name: userData.last_name,
				is_staff: userData.is_staff,
				is_superuser: userData.is_superuser,
			};
		},
		logout: (state, action) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
