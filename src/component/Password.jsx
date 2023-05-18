import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Password() {
    const [password,setPassword] = useState('')
    const [otp,setOtp] = useState(0)

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            let storedOtp = localStorage.getItem("otp")
                if(otp == storedOtp) {
                    toast.success("Password Reset Success")
                    //axios post code store new password
                    window.location.href = "/"
                } else {
                    toast.error('Otp are not matched')
                }
          
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }   

  return (
    <div className='container'>
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-center">
                New Password
            </h3>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div className="form-group mt-2">
                            <label htmlFor="otp">OTP</label>
                            <input type="number" name="otp" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="password">New Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" value="Reset Password" className="btn btn-outline-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Password