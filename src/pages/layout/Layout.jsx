import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProjects } from "../../store/slices/projectSlice/projectSlice"

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
                  {project.title}
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