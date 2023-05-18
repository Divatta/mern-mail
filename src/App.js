import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './component/Home'
import Password from './component/Password'
import ResetPassword from './component/ResetPassword'


function App() {
  return (
    <Router>
      <ToastContainer autoClose={4000} position={'top-right'} theme={'dark'} />
        <Routes>
              <Route path={`/`} element={<Home/>} />
              <Route path={`/password/reset`} element={<ResetPassword/>} />
              <Route path={`/password/new`} element={<Password/>} />
        </Routes>
    </Router>
  )
}

export default App