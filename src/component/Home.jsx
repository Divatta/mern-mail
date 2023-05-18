import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-center">
                    Password Reset
                </h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <NavLink to={`/password/reset`} className="btn btn-outline-success">Reset password</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home