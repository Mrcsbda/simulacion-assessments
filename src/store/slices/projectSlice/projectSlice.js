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
        },
        addUser: (state, action) => {
            const findProject = state.projects.findIndex(project => project.id === action.payload.projectId)
            console.log(state.projects[findProject].usersId)
            state.projects[findProject].usersId = [...state.projects[findProject].usersId, action.payload.userId];
        }

    }
})

export const { checking, isNotChecking, login, logout, updateProjects , getUser , IsAuthenticated , deleteProject, addUser} = projectSlice.actions