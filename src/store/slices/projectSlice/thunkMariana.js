import { projectsApi } from "../../../api/projectsApi"
import { addUser, deleteProject } from "./projectSlice"

export const addUserThunk = (email, projectId, projects) => {
    return async (dispatch) => {
        try {
            const userData = await projectsApi.get(`users?email=${email}`)
            const [userInfo] = userData.data

            const info = {
                userId: userInfo.id,
                projectId
            }

            const findProject = projects.findIndex(project => project.id == projectId)

            const users = [...projects[findProject].users, userInfo.id]
            console.log(users)

            await projectsApi.patch(`projects/${projectId}`, {
                users: users
            })
            dispatch(addUser(info))

            return userInfo ? true : null

        } catch (error) {
            return null
        }

    }
}

export const deleteProjectThunk = (projectId) => {
    return async (dispatch) => {
        try {
            // await projectsApi.delete(`projects/${projectId}`)
            dispatch(deleteProject(projectId));
        } catch (error) {
            return null
        }

    }
}