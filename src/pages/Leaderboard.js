import React from "react";
import "../styles/Leaderboard.css"; // Import the CSS file

// Sample Leaderboard Data
const leaderboardData = [
  { rank: 1, name: "Alice Johnson", points: 1500, avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { rank: 2, name: "Bob Williams", points: 1400, avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { rank: 3, name: "Charlie Brown", points: 1300, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { rank: 4, name: "David Smith", points: 1200, avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
  { rank: 5, name: "Eve Jackson", points: 1100, avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index} className={`rank-row ${index < 3 ? "top-rank" : ""}`}>
              <td className="rank-cell">
                <span className={`rank-badge rank-${index + 1}`}>{player.rank}</span>
              </td>
              <td className="player-info">
                <img src={player.avatar} alt={player.name} className="avatar" />
                <span className="player-name">{player.name}</span>
              </td>
              <td className="points-cell">{player.points} ⚡</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
