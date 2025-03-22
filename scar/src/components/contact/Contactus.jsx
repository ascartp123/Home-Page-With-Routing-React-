import React, { useEffect } from "react";
import "./Contactus.css"; 
import { useState } from "react";

const Contactus = () => {

  
      useEffect(() => {
        document.body.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)";
        document.body.style.overflow = "hidden"; 
    
        return () => {
          document.body.style.background = "";
          document.body.style.overflow = ""; 
        };
      }, []);

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        setName("");
        setEmail("");
        setMessage("");
      };
    

  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className="main">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="label">Your Name</div>
          <input type="text" placeholder="Enter your name" className="input" value={name} onChange={(e) => setName(e.target.value)} />

          <div className="label">Email Address</div>
          <input type="email" placeholder="Enter your email" className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <div className="label">Your Message</div>
          <textarea placeholder="Write your message..." className="input textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <button className="btn" type="submit">Send Message</button>
        </form>

        <p className="footer-text">We’ll get back to you within 24 hours.</p>
      </div>
    </div>
  );
};

export default Contactus;
