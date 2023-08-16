import { useNavigate } from "react-router-dom"
import { projectsApi } from "../../../api/projectsApi"
import { checking, isNotchecking, login } from "./projectSlice"

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

                console.log(projects);

            if (userInfo) {
                const user = {
                    userInfo,
                    projects
                }
                dispatch(login(user))
            } else {
                dispatch(isNotchecking())
            }

        } catch (error) {

        }



    }
}