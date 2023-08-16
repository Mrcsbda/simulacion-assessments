import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import "./login.scss"
import { isLogin } from '../../store/slices/projectSlice/thunk'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'

const Login = () => {
    const { isLoading } = useSelector(state => state.projects)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(isLogin(data.email, data.password))
        navigate("/")
    }

    return (
        <main className='login'>

            {isLoading ?
                <Loader>

                </Loader> :

                <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='login__title'>Iniciar sesión</h1>
                    <div className='login__input-container'>
                        <label htmlFor="email" className='login__label'>Correo</label>
                        <input
                            id="email"
                            type="email"
                            placeholder='Escribe tu Correo Electrónico'
                            className='login__input'
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className='login__input-container'>
                        <label htmlFor="password" className='login__label'>Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            placeholder='Escribe tu Contraseña'
                            className='login__input'
                            {...register("password", { required: true })}
                        />
                    </div>
                    <button type='submit'>Enviar</button>
                </form>

            }

        </main>
    )
}

export default Login