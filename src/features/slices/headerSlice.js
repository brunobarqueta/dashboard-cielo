import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        pageTitle: "Home",
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload.title
        },
    }
})

export const { setPageTitle } = headerSlice.actions

export default headerSlice.reducer