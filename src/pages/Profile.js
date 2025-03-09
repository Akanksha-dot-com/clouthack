import React from "react";
import "../styles/Profile.css";
import AchievementCard from "../components/AchievementCard";
import CertificateCard from "../components/CertificateCard";

const Profile = () => {
  const user = {
    name: "John Doe",
    username: "@johndoe",
    profilePic: "https://i.pravatar.cc/150?img=10",
    github: "https://github.com/johndoe",
    xpPoints: 12000,
    hackathonsParticipated: 15,
    hackathonsWon: 5,
    achievements: [
      { title: "Hackathon Champion", icon: "🏆" },
      { title: "Bug Bounty Hunter", icon: "🔍" },
      { title: "1000+ XP Earned", icon: "⚡" },
    ],
    certificates: [
      { name: "Aptos Hackathon", issuedBy: "Aptos Foundation", year: "2024" },
      { name: "Web3 Pioneer", issuedBy: "Ethereum Foundation", year: "2023" },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>{user.username}</p>
        <a href={user.github} target="_blank" rel="noopener noreferrer" className="github-link">
          GitHub Profile 🔗
        </a>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h3>{user.xpPoints} XP</h3>
          <p>Experience Points</p>
        </div>
        <div className="stat-box">
          <h3>{user.hackathonsParticipated}</h3>
          <p>Hackathons Participated</p>
        </div>
        <div className="stat-box">
          <h3>{user.hackathonsWon}</h3>
          <p>Hackathons Won</p>
        </div>
      </div>

      <h3 className="section-title">🏅 Achievements</h3>
      <div className="achievements">
        {user.achievements.map((achieve, index) => (
          <AchievementCard key={index} title={achieve.title} icon={achieve.icon} />
        ))}
      </div>

      <h3 className="section-title">📜 Certificates</h3>
      <div className="certificates">
        {user.certificates.map((cert, index) => (
          <CertificateCard key={index} name={cert.name} issuedBy={cert.issuedBy} year={cert.year} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
