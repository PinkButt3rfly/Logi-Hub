import React, { useState } from "react"
import axios from "axios"
//import { useAuth } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';


function UserLogin() {

    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //onst { saveToken } = useAuth();


    async function submit(e){
        e.preventDefault();

        try{
            axios.post("http://localhost:3005/api/users/login", {
                email, password
            })
            .then(res=>{
                if(res.data['message']==="Success"){
                // saveToken(res.data['token']);
                  history('/dashboard');
                }else{
                  alert("wrong details")
                }
               
            })
            .catch(e=>{
                alert("something went wrong")
                console.log(e)
            })
        }
        catch(e){
            console.log(e);
        }
    }



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
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Email" name="" id="c" />

                            </div>

                            <div className="mb-3">
                            <label for="pwd">Password:</label>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Password" name="" id="d" />
                            </div>

                            <div className="form-check mb-3">
                               <label className="form-check-label">
                                 <input className="form-check-input" type="checkbox" name="remember"/> Remember me? <span class="span"><a href="#">Reset Password</a></span>
                               </label>
                           </div>

                            <input type="submit" onClick={submit} value="Login" className="btn" />
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
