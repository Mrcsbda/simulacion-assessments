import { projectsApi } from "../../../api/projectsApi"
import { checking, isNotChecking } from "./projectSlice"

export const addUser = (email) => {
    return async (dispatch) => {
        try {

            const userData = await projectsApi.get(`users?email=${email}`)
            const [userInfo] = userData.data
            console.log(userInfo)

            // const projectsData = await projectsApi.get(`Projects`)
            // const projectsInfo = projectsData.data

            // const projects = projectsInfo.filter((project) => (
            //     project.usersId.includes(userInfo.id)
            // ))

            // const user = {
            //     userInfo,
            //     projects
            // }
            return userInfo ? true : null

        } catch (error) {
            return null
        }

    }
}

export const deleteProject = (postId) => {
    return async (dispatch) => {
        try {
            dispatch(deleteProject(postId));
        } catch (error) {
            return null
        }

    }
}