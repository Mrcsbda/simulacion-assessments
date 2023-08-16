import { projectsApi } from "../../../api/projectsApi"

export const addUser = (email) => {
    return async (dispatch) => {
        dispatch(checking())

        try {
            const userData = await projectsApi.get(`users?email=${id}`)
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

            dispatch(getUser(user))
            dispatch(isNotChecking())

        } catch (error) {
            dispatch(isNotChecking())
        }

    }
}