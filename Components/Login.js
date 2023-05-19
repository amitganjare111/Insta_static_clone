import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div>
      <div className="container">
      <div className="slider-area d-none d-md-block"> 
        <div className=" d-flex justify-content-center"></div>
      
          <div className="area1">
       
           <div className="card mt-4">
            <div className="d-flex justify-content-center">
               <div className="logo2 mt-5"></div>
            </div>
            <div className="form-area ps-4 pe-4 mt-5">
               <input type="text" className="form-control" placeholder="Phone number, username, or email"/>
               <input type="password" className="form-control mt-3" placeholder="Password"/>
            </div>
            <button type="button" className="btn ml-4 mr-4 mt-4 mb-4">Log in</button>
            <div className="line ml-3">OR</div>
              <a className="size1" href="/forgotpass">Forgot password</a>
            </div>
          <div className="card mt-2">
            <div className="card-body text-center">Don't have an account?
              <a  className="signup-weight" href="/signup"> Signup</a>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    
  )
}

export default Login;