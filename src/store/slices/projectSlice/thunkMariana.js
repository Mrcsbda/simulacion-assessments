import { projectsApi } from "../../../api/projectsApi"
import { checking, isNotChecking } from "./projectSlice"

export const addUser = (email) => {
    return async (dispatch) => {
        try {
            console.log(email)
            const userData = await projectsApi.get(`users?email=${email}`)
            const [userInfo] = userData.data

            // const projectsData = await projectsApi.get(`Projects`)
            // const projectsInfo = projectsData.data

            // const projects = projectsInfo.filter((project) => (
            //     project.usersId.includes(userInfo.id)
            // ))

            // const user = {
            //     userInfo,
            //     projects
            // }

        } catch (error) {
            return null
        }

    }
}