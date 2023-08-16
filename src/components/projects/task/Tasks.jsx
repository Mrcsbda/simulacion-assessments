import React from 'react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const Tasks = ({tasks}) => {
  return (

      <ul className="Layout__projects__tasks">
        {tasks.map((task)=>(
            <li key={task.id} className="Layout__projects__task">
              <input type="checkbox" checked={task.completed} onChange={()=> {}}/>
              <span>{task.title}</span>

            </li>
        ))}
      </ul>
  )
}

export default Tasks