import Swal from "sweetalert2"



export const editProject = async (project) =>{
    const { value: newTitle} = await Swal.fire({
        input: 'text',
        inputLabel: 'Rename the project',
        inputPlaceholder: 'Type a title for a project',
        inputValue: project.title,
      })
      if (newTitle) {
        const newProject = {
            ...project,
            "title": newTitle
        }
        return newProject
      }
}

export const editTask = async (task) =>{
  const { value: newTitle} = await Swal.fire({
      input: 'text',
      inputLabel: 'Rename the task',
      inputPlaceholder: 'Type a title for a task',
      inputValue: task.title,
    })
    if (newTitle) {
     
      const newTask = {
          ...task,
          "title": newTitle
      }
      return newTask
    }
}