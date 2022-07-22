import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

// GET user/tokens from localstorage
const user = JSON.parse(localStorage.getItem("expm_user"));
const accessToken = JSON.parse(localStorage.getItem("expm_accessToken"));
const refreshToken = JSON.parse(localStorage.getItem("expm_refreshToken"));

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: user ? user : null,
		accessToken: accessToken ? accessToken : null,
		refreshToken: refreshToken ? refreshToken : null,
	},
	reducers: {
		setCredentials: (state, action) => {
			const { access, refresh } = action.payload;
			const userData = jwt_decode(access);
			state.accessToken = access;
			state.refreshToken = refresh;
			const user = {
				email: userData.email,
				first_name: userData.first_name,
				last_name: userData.last_name,
				is_staff: userData.is_staff,
				is_superuser: userData.is_superuser,
			};
			state.user = user;

			localStorage.setItem("expm_user", JSON.stringify(user));
			localStorage.setItem("expm_accessToken", JSON.stringify(access));
			localStorage.setItem("expm_refreshToken", JSON.stringify(refresh));
		},
		logout: (state, action) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;

			localStorage.removeItem("expm_user");
			localStorage.removeItem("expm_accessToken");
			localStorage.removeItem("expm_refreshToken");
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
