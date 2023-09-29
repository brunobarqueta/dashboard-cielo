import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	transactions: [],
	loading: false,
};

export const fetchTransactions = createAsyncThunk("transactions/fetchUsers", async () => {
	try {
		const response = await fetch("http://localhost:8000/items");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

const transationsSlice = createSlice({
	name: "transactions",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchTransactions.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchTransactions.fulfilled, (state, action) => {
			state.loading = false;
			state.transactions = action.payload;
		});
		builder.addCase(fetchTransactions.rejected, (state, action) => {
			state.loading = false;
			state.transactions = [];
		});
	},
});

export default transationsSlice.reducer;
