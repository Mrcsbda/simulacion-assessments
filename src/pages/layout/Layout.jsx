import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProjects } from "../../store/slices/projectSlice/projectSlice"
import Tasks from '../../components/projects/task/Tasks'
import "./Layout.scss"
import Loader from '../../components/loader/Loader'
import AddUser from '../../components/addUser/AddUser'
import AddProject from '../../components/addProject/AddProject'
import DeleteProject from '../../components/deleteProject/DeleteProject'
import { editProject } from '../../components/SwalsEdit/editProject'
import { patchProject } from '../../store/slices/projectSlice/thunkSebastian'


const Layout = () => {

  const dispatch = useDispatch()
  const { isLoading, userInfo, projects } = useSelector(state => state.projects)
  const [openProject, setOpenProject] = useState({})
  const [newUser, setNewUser] = useState(false)
  const [newProject, setNewProject] = useState(false)
  const [deleteProject, setDeleteProject] = useState(false)
  const [projectId, setProjectId] = useState("")

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
  const handleEditProject = async (project, userId)=> {
   const newProject = await editProject(project)
    dispatch(patchProject(project.id, newProject, userId))
  }

  const addNewUser = (id) => {
    setNewUser(true)
    setProjectId(id)
  }

  const addNewProject = () => {
    setNewProject(true)
  }

  const deleteProjct = (id) => {
    setDeleteProject(true)
    setProjectId(id)
  }
  

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
                    <img className="Layout__icons" src="/images/add-project.svg" alt="" onClick={() => addNewProject()} />
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
                          <img className="Layout__icons-task" src="/images/delete.svg" alt="" onClick={() => deleteProjct(project.id)} />
                          <img className="Layout__icons-task" src="/images/add-user.svg" alt="" onClick={() => addNewUser(project.id)} />
                          <img onClick={()=> handleEditProject(project, userInfo.id)} className="Layout__icons-task" src="/images/edit.svg" alt="edit.svg" />

                          {
                            openProject[project.id] ?
                              <figure className='arrow_down' onClick={() => handleCloseProjects(project.id, userInfo.id)}><img src="/images/arrow-up.svg" alt="arrowDown" /></figure>
                              :
                              <figure className='arrow_down' onClick={() => handleOpenProjects(project.id)}><img src="/images/arrow_down.svg" alt="arrowDown" /></figure>}
                        </div>
                        {openProject[project.id] &&
                          <Tasks tasks={project.tasks} project={project} projectId={project.id} userId={userInfo.id}/>}
                      </li>
                    ))}
                  </ul>
                }
              </section>
              {
                newUser && (
                  <AddUser setNewUser={setNewUser} projectId={projectId} />
                )
              }
              {
                newProject && (
                  <AddProject setNewProject={setNewProject} />
                )
              }
              {deleteProject && (
                <DeleteProject setDeleteProject={setDeleteProject} projectId={projectId}/>
              )}
            </>
          )
        }
      </main>
    </>
  )
}

export default Layout