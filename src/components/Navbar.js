// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/Navbar.css"; // Import the CSS file for styling

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">Clouthack</h2>
//       <div className="nav-links">
//         <NavLink to="/" activeClassName="active">Home</NavLink>
//         <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
//         <NavLink to="/certificates" activeClassName="active">Certificates</NavLink>
//         <NavLink to="/profile" activeClassName="active">Profile</NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Clouthack</h2>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/leaderboard" className="nav-item">Leaderboard</NavLink>
        <NavLink to="/notification" className="nav-item">Certificates</NavLink>
        <NavLink to="/profile" className="nav-item">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
