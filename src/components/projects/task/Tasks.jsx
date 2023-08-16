import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Swal from 'sweetalert2'

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

  return (

    <ul className="Layout__projects__tasks">
      {tasks.map((task) => (
        <li key={task.id} className="Layout__projects__task">
          <input type="checkbox" checked={task.completed} onChange={() => { }} />
          <span>{task.title}</span>
          <figure className="Layout__icons-task__container">
            <img className="Layout__icons-task" src="/images/edit.svg" alt="" />
            <img className="Layout__icons-task" src="/images/delete.svg" alt="" onClick={() => { deleteTask(task) }} />
          </figure>
        </li>
      ))}
    </ul>
  )
}

export default Tasks