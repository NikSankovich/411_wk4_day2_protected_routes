import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
// import Home from './components/Home'
import Home from './containers/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'


const checkAuth = (props) => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedin"] ? true : false

}


const ProtectedRoute = (props) => {
    const { component: Component } = props

    return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<ProtectedRoute component={About} />} />
            <Route path="/car/:id" element={<ProtectedRoute component={Car} />} />
        </Routes>
    );
};

export default Router;