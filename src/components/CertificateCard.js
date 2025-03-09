import React from "react";
import "../styles/Profile.css";

const CertificateCard = ({ name, issuedBy, year }) => {
  return (
    <div className="certificate-card">
      <h4>{name}</h4>
      <p>{issuedBy}</p>
      <small>{year}</small>
    </div>
  );
};

export default CertificateCard;
