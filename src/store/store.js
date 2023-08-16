import { configureStore } from '@reduxjs/toolkit'
import { projectSlice } from './slices/projectSlice/projectSlice'

export const store = configureStore({
  reducer: {
    projects: projectSlice.reducer
  },
})