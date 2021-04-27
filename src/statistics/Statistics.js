import React from "react";

const Statistics = ({ title, stats }) => {
  return (
    <>
      <h2>{statistisalData.title}</h2>
      <ul>
        <li>{statistisalData.stats.id}</li>
        <li>{statistisalData.stats.label}</li>
        <li>{statistisalData.stats.percentage}</li>
      </ul>
    </>
  );
};

export default Statistics;
