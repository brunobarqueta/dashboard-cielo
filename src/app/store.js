import { configureStore, combineReducers } from '@reduxjs/toolkit'
import headerSlice from '../features/slices/headerSlice'
import transactionsSlice from '../features/slices/transactionsSlice'
import summarySlice from '../features/slices/summarySlice'

const rootReducers = combineReducers({
  transactions: transactionsSlice,
  header: headerSlice,
  summary: summarySlice,
})

export default configureStore({
    reducer: rootReducers
})