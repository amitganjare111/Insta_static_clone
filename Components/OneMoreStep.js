import React from 'react'
import './OneMoreStep.css';

const OneMoreStep = () => {
  return (
    <div>
       <div className="container">
        <div className="d-flex justify-content-center mt-4">
          <div className="area3">
           <div className="card mt-3">
            <div className="d-flex justify-content-center">
              <div className="alert mt-3 "></div>
            </div>
            <div className="one-more-step">Just one more step</div>
            <div className="enter-code">Enter the 6-digit code we sent to: +917776049120</div>
            <div className="form-are></div>a ps-4 pe-4 mt-3">
              <input type="text" className="form-control" placeholder="######"/>
            </div>
              <button type="button" className="btn ml-4 mr-4 mt-4 mb-4">Log in</button>
            <div className="change-number-anchor mb-4"> <a href="/">Change Number</a> | <a href="/">Request New Code</a></div>
            </div>
            <div className="card mt-2 mb-3">
              <div className="card-body text-center">Have an account?
               <a href="/signup"> Log in</a>
              </div>
            </div>      
           </div>
         </div>
       </div>
       </div>
  )
}

export default OneMoreStep;