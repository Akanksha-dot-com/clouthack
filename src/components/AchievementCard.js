import React from "react";
import "../styles/Profile.css";

const AchievementCard = ({ title, icon }) => {
  return (
    <div className="achievement-card">
      <span className="achievement-icon">{icon}</span>
      <p>{title}</p>
    </div>
  );
};

export default AchievementCard;
