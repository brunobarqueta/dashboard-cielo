import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	summary: {},
	loading: false,
};

export const fetchSummary = createAsyncThunk("summary/fetchUsers", async () => {
    try {
        const response = await fetch("http://localhost:8000/summary");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const summarySlice = createSlice({
	name: "summary",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchSummary.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchSummary.fulfilled, (state, action) => {
			state.loading = false;
            state.summary = action.payload;
		});
		builder.addCase(fetchSummary.rejected, (state, action) => {
			state.loading = false;
            state.summary = {};
		});
	},
});

export default summarySlice.reducer;
