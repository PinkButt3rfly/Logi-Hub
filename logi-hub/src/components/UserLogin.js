import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3005/login', {email, password})
    .then(result => {console.log(result)
      if(result.data === 'Success')
     navigate('/dashboard')
    })
    .catch(err => console.log(err))
    
  }


  /*export function UserLogin () {
    const [email, setEmail] = useState()
  const [password, setPassword] = useState()
    const navigate = useNavigate();
    
    const handleClick = () => {
    navigate('/dashboard');
    };

    return (
      <button onClick={handleClick}>Go to other page</button>
      );
      }*/



  return (
    <div>
       <div>
          <div className="container-fluid-md custom-container-1 ">
            <div className="row">
                <div className="col-md-6">
                    <img className="lock" src="../Assets/images/lock.svg"/>
                </div>

                <div className="col-md-6">
                    <div className="form">
                        <h1>Welcome Back!</h1>
                        <p>Et laoreet est gravida sociis arcu risus faucibus ac.</p>

                        <div className="icons">
                          
                            <a href="#"><img className="icon-login" src="../Assets/icons/google.svg"></img></a>
                              
                            <a href="#"><img className="icon-login" src="../Assets/icons/apple.svg"></img></a>

                            <a href="#"><img className="icon-login" src="../Assets/icons/facebook.svg"></img></a>
                              
                        </div>
                    

                    
                        <form className="form1" action="POST">
                            <div className="mb-3 mt-3">
                              <label for="email">Email:</label>
                              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                              onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                              <label for="pwd">Password:</label>
                              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"
                              onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-check mb-3">
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember"/> Remember me? <span class="span"><a href="#">Reset Password</a></span>
                              </label>
                            </div>
                            <input  onSubmit={handleClick} type="submit" value="Login" className="btn" />

                            <p className="form2">Don't have an account? <a href="#">Sign Up</a></p>
                        </form>
                    
                    </div>
                </div>
            </div>
          </div>
      </div> 
    </div>
  )
}

export default UserLogin
