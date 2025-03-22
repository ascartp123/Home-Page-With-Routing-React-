import React, { useEffect } from "react";
import "./Home.css"; 

const Home = () => {

useEffect(() => {
  document.body.style.overflowX = "hidden";
  return () => {
    document.body.style.overflowX = "";
  };
}, []);
  
  return (
    <div className="home-container">
      
      <header className="hero-section">
        <div className="overlay">
          <h1>Welcome to Our Creative Space</h1>
          <p>Explore new ideas, stay inspired, and be part of a visionary community.</p>
        </div>
      </header>

     
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a group of innovators, designers, and thinkers committed to shaping the future through technology,
          creativity, and collaboration.
        </p>
        <img  src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1742533962~exp=1742537562~hmac=2f7ef101e56cf441709f8a17b6ede27ee2343c66bcc53bb80a0dea6bad1dd0d4&w=1380" alt="About Us" />
      </section>

     
      <section className="projects-section">
        <h2>Our Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://img.freepik.com/free-photo/hand-touching-screen-rpa-concept_23-2149311915.jpg?t=st=1742534279~exp=1742537879~hmac=fdecf268faf240aa74132691d0052c19efa3a8b8acc8c30db252585fc17c6354&w=996" alt="Project 1" />
            <h3>Smart Automation</h3>
            <p>Using AI to optimize workflows and enhance efficiency.</p>
          </div>
          <div className="project-card">
            <img src="https://img.freepik.com/free-photo/businessmen-businesswomen-meeting-brainstorming-ideas_7861-3065.jpg?t=st=1742533912~exp=1742537512~hmac=f1c775c624d9cea13f49c78333cefd267b5ab6bd0ce6369c812e2fa93a1f7700&w=1380" alt="Project 2" />
            <h3>Sustainable Living</h3>
            <p>Building eco-friendly solutions for a better tomorrow.</p>
          </div>
          <div className="project-card">
            <img src="https://img.freepik.com/free-photo/business-network_53876-123669.jpg?t=st=1742534209~exp=1742537809~hmac=807ca48e8ae40b4e2105f14a3ac1ae88d72dabcc69b10e62dbc12b718c5c97c6&w=740" alt="Project 3" />
            <h3>Next-Gen Connectivity</h3>
            <p>Redefining how people connect and communicate globally.</p>
          </div>
        </div>
      </section>

      
      <section className="inspiration-section">
        <h2>Stay Inspired</h2>
        <p>Creativity comes from the right environment. Let us help you find yours.</p>
        <img src="https://img.freepik.com/free-vector/leadership-innovative-idea-concept-background-with-light-bulb_1017-43070.jpg?t=st=1742534250~exp=1742537850~hmac=e94c5720cae4adbc6528569cb329548b3cfe64f20f409b3c9a580181765deec8&w=996" alt="Inspiration" />
      </section>
    </div>
  );
};

export default Home;
