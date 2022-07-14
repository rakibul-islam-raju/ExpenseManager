import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "../../services/categoryService";

const initialState = {
	error: null,
	loading: false,
	selectedGrandCat: 0,
	selectedParentCat: 0,
	grandParentCategories: [],
	parentCategories: [],
	childCategories: [],
	result_set: {},
};

// get categories
export const getCategoryList = createAsyncThunk(
	"category/getCategoryList",
	async (args, { rejectWithValue }) => {
		try {
			const params = {};
			if (args?.offset) params.offset = args.offset;
			const res = await categoryService.getCategories(params);
			return res;
		} catch (error) {
			throw rejectWithValue(error.response);
		}
	}
);

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		selectGrandParentCategory(state, { payload }) {
			const selectedCat = state.grandParentCategories.find(
				(item) => item.id === payload
			);
			state.selectedGrandCat = payload;
			state.parentCategories = selectedCat.children;

			// reset parent
			state.selectedParentCat = 0;
			state.childCategories = [];
		},
		selectParentCategory(state, { payload }) {
			const selectedGrandCat = state.grandParentCategories?.find(
				(item) => item.id === state.selectedGrandCat
			);
			const selectedParentCat = selectedGrandCat?.children.find(
				(item) => item.id === payload
			);

			state.selectedParentCat = payload;
			state.childCategories = selectedParentCat?.children;
		},
	},
	extraReducers: {
		[getCategoryList.pending]: (state) => {
			state.loading = true;
		},
		[getCategoryList.fulfilled]: (state, { payload }) => {
			state.loading = false;

			const total = payload.data.meta.result_set.total;
			const limit = payload.data.meta.result_set.limit;

			state.grandParentCategories = payload.data.data.categories;

			// reset parent and child
			state.parentCategories = [];
			state.childCategories = [];
			state.selectGrandParentCategory = 0;
			state.selectParentCategory = 0;

			state.result_set = {
				...payload.data.meta.result_set,
				totalPge: Math.ceil(total / limit),
			};
		},
		[getCategoryList.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload?.data;
		},
	},
});

// actions
export const { selectGrandParentCategory, selectParentCategory } =
	categorySlice.actions;

// selectors
export const getError = (state) => state.category.error;
export const getGrandParentCategories = (state) =>
	state.category.grandParentCategories;
export const getParentCategories = (state) => state.category.parentCategories;
export const getChildCategories = (state) => state.category.childCategories;
export const getCategoryMetaData = (state) => state.category.result_set;

export default categorySlice.reducer;
