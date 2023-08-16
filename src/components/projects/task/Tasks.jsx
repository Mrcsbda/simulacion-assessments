import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { editTask } from '../../SwalsEdit/editProject'
import { patchProject } from '../../../store/slices/projectSlice/thunkSebastian'
import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTaskThunk } from '../../../store/slices/projectSlice/thunkJose'

const Tasks = ({ tasks, projectId }) => {
  const [tasksArray, setTasksArray] = useState(false)
  const [repeatProcess, setRepeatProcess] = useState(false)

  const dispatch = useDispatch()
  const { projects } = useSelector(state => state.projects)
  useEffect(() => {
    console.log(projects)
    console.log(projectId)
    if (tasksArray == false) {
      setTasksArray(tasks)
      setRepeatProcess(!repeatProcess)
    } else {
      console.log(tasksArray)
    }
  }, [repeatProcess])

  const editTask = () => {

  }

  const deleteTask = (taskContent) => {
    console.log(taskContent)
    Swal.fire({
      title: '¿Desea eliminar la tarea?',
      text: `id: ${taskContent.id} |titulo: ${taskContent.title} |estado: ${taskContent.completed}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        let arrayProcess1 = tasksArray;
        let arrayProcess2 = arrayProcess1.filter((element) => element.id !== taskContent.id)
        console.log(arrayProcess2)
        dispatch(deleteTaskThunk(projectId, arrayProcess2));
        Swal.fire(
          'Borrado!',
          'La tearea ha sido eliminada.',
          'success'
        )
      }
    })
  }


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
            <img className="Layout__icons-task" src="/images/delete.svg" alt="" onClick={() => { deleteTask(task) }} />
            <img className="Layout__icons-task" src="/images/edit.svg" alt=""  onClick={()=>handleEditTask(task)}/>
    
          </figure>
        </li>
      ))}
    </ul>
  )
}
}

export default Tasks