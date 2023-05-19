import React from 'react'
import './SignUp.css';
import {useNavigate} from "react-router-dom"

const SignUp = () => {

    const navigate = useNavigate();

  return (
    <div>
    <div className="container">
      <div className="d-flex justify-content-center mt-2">
        <div className="area2">
          <div className="card mt-3">
          <div className="card-body"></div>
            <div className="d-flex justify-content-center">
              <div className="logo1 ml-3 mt-1"></div>
            </div>
            <div className="top-sentence1 mt-2">
               Sign up to see photos and videos from your friends.
            </div>
            <button type="button" className="btn ml-4 mr-4 mt-2 mb-3">Log in with Facebook</button>
             <div className="line ml-4">OR</div>
            <div className="form-area ps-4 pe-4 mt-2 input-group-sm">
                <input type="text" className="form-control  input-sm" placeholder="Mobile number or email"/>
                <input type="text" className="form-control mt-2" placeholder="Full Name"/>
                <input type="text" className="form-control mt-2" placeholder="Username"/>
                <input type="password" className="form-control mt-2" placeholder="Password"/>

                <div className="sentence mt-2">
                 People who use our service may have uploaded your contact information to instagram.
                 <a href="Learn More">Learn More</a>
                </div>

                <div className="sentence mt-3">
                  By signing up, you agree to our<a href="Terms">Terms</a>,<a href="Privacy">Privacy Policy</a>
                  and<a href="Cookies">Cookies Policy</a>
                </div>

              </div>
                <button  onClick={()=>navigate('/AddBirthday')} type="button" className="btn ml-4 mr-4 mt-3 mb-4">Sign up</button>
          </div>
              <div className="card mt-2 mb-4">
                <div className="card-body text-center">have an account?
                   <a href="/">Log in</a>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default SignUp;