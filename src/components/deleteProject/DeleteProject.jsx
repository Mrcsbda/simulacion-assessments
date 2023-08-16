import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const DeleteProject = ({setDeleteProject}) => {
    const { isLoading, userInfo } = useSelector(state => state.projects)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useDispatch()

    const deleteProject = async (data) => {
    }

    const closeModal = () => {
        setDeleteProject(false)
    }

    return (
        <section className='add-user'>
            <section className='login__form'>
            <img className='add-user__icon' src="/images/close.svg" alt="" onClick={closeModal} />
                <h1 className='login__title'>¿Está seguro que desea eliminar el proyecto?</h1>
                <button className='login__btn'>Si, Eliminar</button>
            </section>
        </section>
    )
}

export default DeleteProject