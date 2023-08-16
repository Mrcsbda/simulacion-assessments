import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProjects } from "../../store/slices/projectSlice/projectSlice"
import Tasks from '../../components/projects/task/Tasks'
import "./Layout.scss"


const Layout = () => {

  const dispatch = useDispatch()
  const { isLoading, userInfo, projects } = useSelector(state => state.projects)
  const handleUpdateProject = () => {
    dispatch(updateProjects())
  }

  return (
    <>
      <main className="Layout__container">
<section> 
</section>

        <section className="Layout__container__manager">
          <h1 className="Layout__title" >{`Gestor de proyectos de ${userInfo.name}`}</h1>
          {
            <ul className="Layout__projects">
              {projects.map((project) => (
                <li key={project.id} className="Layout__projects__project">
                 <h2>{project.title}</h2> 

                  <Tasks tasks={project.tasks}/>
                </li>
              ))}
            </ul>
          }
        </section>
      </main>
    </>
  )
}

export default Layout