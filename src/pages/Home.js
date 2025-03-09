// import React from "react";

// const Home = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
//       <h1>Welcome to Clouthack 🚀</h1>
//       <p>A Web3 Hackathon Rating & Certification Platform</p>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "../styles/home.css"; // Import the new CSS file
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Clouthack 🚀</span>
        </h1>
        <p className="hero-subtitle">A Web3 Hackathon Rating & Certification Platform</p>
        <div className="cta-buttons">
          <Link to="/leaderboard" className="btn">View Leaderboard</Link>
          <Link to="/notification" className="btn btn-secondary">Get Certified</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>🔥 100% Verified Certifications</h3>
          <p>Get blockchain-backed hackathon certificates.</p>
        </div>
        <div className="feature">
          <h3>🏆 Competitor Rankings</h3>
          <p>Track your progress and climb the leaderboard.</p>
        </div>
        <div className="feature">
          <h3>🚀 Gasless Transactions</h3>
          <p>Win and receive prizes instantly, without gas fees.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
