import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="home-left">
        <img src="/assets/chiselonlogo.png" alt="Chiselon Logo" className="home-logo" />
      </div>

      {/* Right Section */}
      <div className="home-right">
        <div className="home-content-box">
          <h1>8807981081</h1>
          <h2>CHISELON TECHNOLOGIES</h2>
          <p>Empowering businesses through</p>
          <p>Technology and Staffing Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
