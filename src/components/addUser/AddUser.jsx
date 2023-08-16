import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import "./addUser.scss"
import { addUser } from '../../store/slices/projectSlice/thunkMariana'

const AddUser = ({ setNewUser, projectId }) => {

    const { isLoading, userInfo } = useSelector(state => state.projects)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [rightInformation, setRightInformation] = useState(true)
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        const validation = await dispatch(addUser(data.email))
        if(validation) {
            setRightInformation(true)
            setNewUser(false)
        } else {
            setRightInformation(false)
        }

        reset()
    }

    const closeModal = () => {
        setNewUser(false)
    }

    return (
        <section className='add-user'>
            <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <img className='add-user__icon' src="/images/close.svg" alt="" onClick={closeModal} />
                <h1 className='login__title'>Agregar Usuario</h1>
                <div className='login__input-container'>
                    <label htmlFor="email" className='login__label'>Correo del usuario</label>
                    <input
                        id="email"
                        type="email"
                        placeholder='Escribe el Correo Electrónico'
                        className='login__input'
                        {...register("email", { required: true })}
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

export default AddUser