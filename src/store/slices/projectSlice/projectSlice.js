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
        isNotChecking: (state) => {
            state.isLoading = false
        },
        IsAuthenticated: (state, action) => {
            state.userIsAuthenticated = action.payload;
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
        },
        getUser: (state, action) => {
            state.userInfo = action.payload.userInfo,
            state.projects = action.payload.projects
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(project => project.id !== action.payload)
        }

    }
})

export const { checking, isNotChecking, login, logout, updateProjects , getUser , IsAuthenticated , deleteProject} = projectSlice.actions