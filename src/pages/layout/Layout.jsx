import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProjects } from "../../store/slices/projectSlice/projectSlice"
import ProjectTask from '../../components/projectTasks/main'

const Layout = () => {

  const dispatch = useDispatch()
  const { isLoading, userInfo, projects } = useSelector(state => state.projects)
  const handleUpdateProject = () => {
    dispatch(updateProjects())
  }

  return (
    <>
      <main className="Layout__container">
        <section className="Layout__container__projects">
          {
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <h2>{project.title} </h2>
                  <ProjectTask/>
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