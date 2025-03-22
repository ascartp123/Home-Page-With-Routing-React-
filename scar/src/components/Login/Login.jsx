import React,{useEffect} from 'react'
import "./Login.css"
import { useState } from 'react';





export const Login = () => {
  
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

  const handlesubmit = (event) => {

    event.preventDefault();
    console.log(email,password);

    setEmail("");
    setPassword("");
  }

  return (
    
    <>
    <div className='flex justify-center items-center h-screen overflow-x-hidden'>
    <div className='main ' >
    <div className='inner text-2xl '><h2>
    Log In</h2></div>
    <form onSubmit={handlesubmit}>
    <div>
      <div className='div'>Email </div>
      <input className='input' type="email" name="" required placeholder='Enter your email'value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div>
      <div className='div'>Password</div><span onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <i className=" logini fa-regular fa-eye-slash"></i> : <i className="logini fa-regular fa-eye"></i>}</span>
      <input className='input' type={showPassword ? "text" : "password"} required placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div>
    <button className='loginbtn'>Submit</button>
    </div>
    </form>
    
  </div>
  </div>
    
    
    </>
  )
}
