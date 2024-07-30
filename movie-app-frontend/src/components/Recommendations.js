import React from 'react';

function Recommendations({ recommendations }) {
  return (
    <div className="recommendations">
      <h2>Recommendations</h2>
      {recommendations.map((rec, index) => (
        <div key={index} className="recommendation-item">
          {rec}
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
