import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'
import Layout from '../pages/layout/Layout'

const Router = () => {
    const { userIsAuthenticated } = useSelector(state => state.projects)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route element={<PublicRouter isAuthenticated={userIsAuthenticated} />} >
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route element={<PrivateRouter isAuthenticated={userIsAuthenticated} />}>
                        <Route index element={<Layout />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router