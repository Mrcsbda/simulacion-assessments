import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProjectThunk } from '../../store/slices/projectSlice/thunkMariana'

const DeleteProject = ({ setDeleteProject, projectId }) => {
    const { isLoading, userInfo } = useSelector(state => state.projects)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useDispatch()

    const deleteProject = () => {
        dispatch(deleteProjectThunk(projectId))
        setDeleteProject(false)
    }

    const closeModal = () => {
        setDeleteProject(false)
    }

    return (
        <section className='add-user'>
            <section className='login__form'>
                <img className='add-user__icon' src="/images/close.svg" alt="" onClick={closeModal} />
                <h1 className='login__title'>¿Está seguro que desea eliminar el proyecto?</h1>
                <button className='login__btn' onClick={deleteProject}>Si, Eliminar</button>
            </section>
        </section>
    )
}

export default DeleteProject