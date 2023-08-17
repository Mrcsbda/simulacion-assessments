import { projectsApi } from "../../../api/projectsApi"
import { IsAuthenticated, checking, getUser, isNotChecking, login, updateProjects } from "./projectSlice"

export const patchProject = (projectId, newProject, userId) => {
    
    return async (dispatch) => {
        dispatch(checking())
        try {
             await projectsApi.patch(`Projects/${projectId}`, newProject)
            
            const projectsData = await projectsApi.get(`Projects`)
            const projectsInfo = projectsData.data

            const projects = projectsInfo.filter((project) => (
                project.users.includes(userId)
            ))

            dispatch(updateProjects({projects}))
            
        } catch (error) {
            dispatch(isNotChecking())
        }

    }
}

