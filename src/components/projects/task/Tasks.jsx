import React from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { editTask } from '../../SwalsEdit/editProject'
import { patchProject } from '../../../store/slices/projectSlice/thunkSebastian'
import { useDispatch } from 'react-redux'

const Tasks = ({ tasks, project, userId }) => {
  const dispatch = useDispatch()
  const handleEditTask = async (task)=> {
    const newTask = await editTask(task)
    const newTasks = tasks.map(task =>
      task.id === newTask.id ? { ...task, title: newTask.title } : task
    )
    const newProject = {
      ...project,
      "tasks": newTasks
    }
     dispatch(patchProject(project.id, newProject, userId))
   }

 const handleCheckTask = (taskH)=>{

  const newTasks = tasks.map(task =>
    task.id === taskH.id ? { ...task, "completed": !taskH.completed } : task
  )
  const newProject = {
    ...project,
    "tasks": newTasks
  }
   dispatch(patchProject(project.id, newProject, userId))

 }


  return (

    <ul className="Layout__projects__tasks">
      {tasks.map((task) => (
        <li key={task.id} className="Layout__projects__task">
          <input type="checkbox" checked={task.completed} onClick={() => { handleCheckTask(task) }} />
          <span>{task.title}</span>
          <figure className="Layout__icons-task__container">
            <img className="Layout__icons-task" src="/images/edit.svg" alt=""  onClick={()=>handleEditTask(task)}/>
            <img className="Layout__icons-task" src="/images/delete.svg" alt="" />
          </figure>
        </li>
      ))}
    </ul>
  )
}

export default Tasks