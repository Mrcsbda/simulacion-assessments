import { projectsApi } from "../../../api/projectsApi"
import { checking, isNotChecking, login } from "./projectSlice"

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
            dispatch(login(user))

        } catch (error) {
            dispatch(isNotChecking())
        }

    }
}