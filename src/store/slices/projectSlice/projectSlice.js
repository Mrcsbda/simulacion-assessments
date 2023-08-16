import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoading: false,
    userIsAuthenticated: false,
    userInfo: {},
    projects: []
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        checking: (state) => {
            state.isLoading = true
        },
        isNotchecking: (state) => {
            state.isLoading = false
        },
        login: (state, action) => {
            state.isLoading = false,
            state.userIsAuthenticated = true,
            state.userInfo = action.payload.userInfo,
            state.projects = action.payload.projects
        },
        logout: (state) => {
            state = initialState
        },
        updateProjects: (state, action) => {
            state.projects = action.payload.projects
        }
    }
})

export const { checking, isNotchecking, login, logout, updateProjects } = projectSlice.actions