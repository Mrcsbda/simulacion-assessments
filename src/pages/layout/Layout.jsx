import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProjects } from "../../store/slices/projectSlice/projectSlice"
import Tasks from '../../components/projects/task/Tasks'
import "./Layout.scss"
import Loader from '../../components/loader/Loader'


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
        {
          isLoading ? (
            <Loader />
          ) : (
            <>
              <section>
              </section>

              <section className="Layout__container__manager">
                <div className="Layout__container__top">
                  <h1 className="Layout__title" >{`Gestor de proyectos de ${userInfo.name}`}</h1>
                  <figure className="Layout__icons-container">
                    <img className="Layout__icons" src="/images/add-project.svg" alt="" />
                    <img className="Layout__icons" src="/images/add-user.svg" alt="" />
                    <img className="Layout__icons" src="/images/edit.svg" alt="" />
                    <img className="Layout__icons" src="/images/delete.svg" alt="" />
                  </figure>
                </div>
                {
                  <ul className="Layout__projects">
                    {projects.map((project) => (
                      <li key={project.id} className="Layout__projects__project">
                        <div className="Layout__projects-container">
                          <input type="checkbox" checked={project.completed} onChange={() => { }} />
                          <h2>{project.title}</h2>
                          <img className="Layout__icons-task" src="/images/add-project.svg" alt="" />


                          {
                            openProject[project.id] ?
                              <figure className='arrow_down' onClick={() => handleCloseProjects(project.id)}><img src="/images/arrow-up.svg" alt="arrowDown" /></figure>
                              :
                              <figure className='arrow_down' onClick={() => handleOpenProjects(project.id)}><img src="/images/arrow_down.svg" alt="arrowDown" /></figure>}
                        </div>
                        {openProject[project.id] &&
                          <Tasks tasks={project.tasks} />}
                      </li>
                    ))}
                  </ul>
                }
              </section>
            </>
          )
        }
      </main>
    </>
  )
}

export default Layout