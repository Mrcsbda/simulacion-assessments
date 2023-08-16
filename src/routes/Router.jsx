import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'
import Layout from '../pages/layout/Layout'
import { getUserByLocal } from '../store/slices/projectSlice/thunk'

const Router = () => {
    const { userIsAuthenticated , userInfo , projects } = useSelector(state => state.projects)
    const dispatch = useDispatch()

    useEffect(()=> {
        getInfoUser()
    },[])

    const getInfoUser = () => {
        const userId = Number(localStorage.getItem('userId'))
        if(userId) {
            dispatch(getUserByLocal(userId))
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route element={<PublicRouter isAuthenticated={userIsAuthenticated} />} >
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route element={<PrivateRouter isAuthenticated={userIsAuthenticated} />}>
                        <Route path='/' element={<Layout />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router