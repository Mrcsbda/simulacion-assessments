import { projectsApi } from "../../../api/projectsApi"
import { IsAuthenticated, checking, getUser, isNotChecking, login } from "./projectSlice"

export const isLogin = (email, password) => {

    return async (dispatch) => {
        dispatch(checking())

        try {
            const userData = await projectsApi.get(`users?email=${email}&password=${password}`)
            const [userInfo] = userData.data

            const projectsData = await projectsApi.get(`Projects`)
            const projectsInfo = projectsData.data

            const projects = projectsInfo.filter((project) => (
                project.usersId.includes(userInfo.id)
            ))

            const user = {
                userInfo,
                projects
            }

            localStorage.setItem('userId', userInfo.id)
            dispatch(login(user))

        } catch (error) {
            dispatch(isNotChecking())
        }

    }
}

export const getUserByLocal = (id) => {
    return async (dispatch) => {
        dispatch(checking())
        dispatch((IsAuthenticated(true)))

        try {
            const userData = await projectsApi.get(`users?id=${id}`)
            const [userInfo] = userData.data

            const projectsData = await projectsApi.get(`Projects`)
            const projectsInfo = projectsData.data

            const projects = projectsInfo.filter((project) => (
                project.usersId.includes(userInfo.id)
            ))

            const user = {
                userInfo,
                projects
            }

            dispatch(getUser(user))
            dispatch(isNotChecking())

        } catch (error) {
            dispatch((IsAuthenticated(false)))
            dispatch(isNotChecking())
        }

    }
}