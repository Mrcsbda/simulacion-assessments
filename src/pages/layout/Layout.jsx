import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProjects } from "../../store/slices/projectSlice/projectSlice"
import Tasks from '../../components/projects/task/Tasks'
import "./Layout.scss"


const Layout = () => {

  const dispatch = useDispatch()
  const { isLoading, userInfo, projects } = useSelector(state => state.projects)
  const [openProject, setOpenProject] = useState({})

  const handleUpdateProject = () => {
    dispatch(updateProjects())
  }
  const handleOpenProjects = (projectId) => {
    setOpenProject((prevOpenProject) => ({
      ...prevOpenProject,
      [projectId]: true,
    }));
  };
  const handleCloseProjects = (projectId) => {
    setOpenProject((prevOpenProject) => ({
      ...prevOpenProject,
      [projectId]: false,
    }));
  };




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
                  <div>
                    <input type="checkbox" checked={project.completed} />
                    <h2>{project.title}</h2>

                    {
                      openProject[project.id] ?
                        <figure className='arrow_down' onClick={()=>handleCloseProjects(project.id)}><img src="/images/arrow-up.svg" alt="arrowDown" /></figure>
                        :
                        <figure className='arrow_down' onClick={()=>handleOpenProjects(project.id)}><img src="/images/arrow_down.svg" alt="arrowDown" /></figure>}
                  </div>
                  {openProject[project.id] &&
                    <Tasks tasks={project.tasks} />}
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