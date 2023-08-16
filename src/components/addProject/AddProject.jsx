import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const AddProject = ({ setNewProject }) => {
    const { isLoading, userInfo } = useSelector(state => state.projects)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [rightInformation, setRightInformation] = useState(true)
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
    }

    const closeModal = () => {
        setNewProject(false)
    }

    return (
        <section className='add-user'>
            <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <img className='add-user__icon' src="/images/close.svg" alt="" onClick={closeModal} />
                <h1 className='login__title'>Agregar Proyecto</h1>
                <div className='login__input-container'>
                    <label htmlFor="title" className='login__label'>Titulo</label>
                    <input
                        id="title"
                        type="text"
                        placeholder='Escribe el Correo Electrónico'
                        className='login__input'
                        {...register("title", { required: true })}
                    />
                </div>
                <div className='login__input-container'>
                    <label htmlFor="description" className='login__label'>Descripción</label>
                    <input
                        id="description"
                        type="text"
                        placeholder='Escribe el Correo Electrónico'
                        className='login__input'
                        {...register("description", { required: true })}
                    />
                </div>
                <div className='login__input-container'>
                    <label htmlFor="image" className='login__label'>Imagen</label>
                    <input
                        id="image"
                        type="url"
                        placeholder='Escribe el Correo Electrónico'
                        className='login__input'
                        {...register("image", { required: true })}
                    />
                </div>
                <button type='submit' className='login__btn'>Agregar</button>
                {
                    !rightInformation && (
                        <p className='login__alert'>
                            Usuario no encontrado
                        </p>
                    )
                }
            </form>
        </section>
    )
}
export default AddProject