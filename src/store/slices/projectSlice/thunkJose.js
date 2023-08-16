import { projectsApi } from "../../../api/projectsApi"
import { IsAuthenticated, checking, getUser, isNotChecking, login, deleteTask } from "./projectSlice"

export const deleteTaskThunk = (projectId, newArray) => {

  return async (dispatch) => {

    try {
      const responseData = await projectsApi.patch(`projects/${projectId}`, { tasks: newArray })
      console.log(responseData)

      if (responseData.status == 200) {
        const projectsData = await projectsApi.get(`Projects`)
        const projectsInfo = projectsData.data

        const projects = projectsInfo.filter((project) => (
          project.usersId.includes(userInfo.id)
        ))
        dispatch(deleteTask(projects))
      }
    } catch (error) {
      console.log(error)
    }
  }
}