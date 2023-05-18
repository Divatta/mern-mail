import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const getRandom = () => {
    return Math.round(Math.random() * 10000);
}

function ResetPassword() {
    const [mail,setMail] = useState('')

    let randomNum = getRandom();
    localStorage.setItem('otp', randomNum)

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            
            let data = {
                to: mail,
                subject: "Password reset OTP",
                content: `<div> <h1>OTP = ${randomNum} </h1> <a href='http://localhost:3000/password/new' target="_blank">New Password</a> </div>`
            }

            const res = await axios.post(`/api/v1/send/mail`, data)
            toast.success(res.data.msg)
            window.location.href = "/"
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }   

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
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" required />
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" value="Generate OTP" className="btn btn-outline-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ResetPassword