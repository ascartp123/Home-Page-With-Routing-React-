import React, { useEffect } from 'react'
import "./Signup.css"
import { useState } from 'react';


export const SignUp = () => {
  useEffect(() => {
    document.body.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.background = ""; 
      document.body.style.overflow = "";
    };
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState(""); 
 
  const handlesubmit = (event) => {


 event.preventDefault();
 

 setEmail("");
 setPassword("");
 setName("");
 


  }
  
  return (
    <>
      <div className='flex justify-center items-center h-screen'>

        <div className='main'>
          <div className='inner text-2xl'><h2>Sign Up</h2></div>

          <form onSubmit={handlesubmit}>
          <div>
            <div className='div'>Name</div> 
            <input className='input' type="text" required placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          
          <div>
            <div className='div'>Email </div>
            <input className='input' type="email" required placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <div className='div'>Password</div>

            <span  onClick={()=>setShowPassword(!showPassword)}>{showPassword ?  <i className=" signupi fa-regular fa-eye-slash"></i> : <i className="signupi fa-regular fa-eye"></i>}</span>
            <input className='input' type={showPassword?"text" : "password"} value={password} required placeholder='Enter your password' onChange={(event)=>setPassword(e.target.value)}/>
          </div>
          <div>
            <button className='signupbtn' type='submit' >Submit</button>
          </div>
          </form>
        </div>
        
      </div>    
    </>
  )
}
