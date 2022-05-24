import React, { useEffect, useState } from 'react';
import LiftCard from '../LiftCard'



const Lifts = () => {
  const [lifts, setLifts] = useState([]);

  const fetchlifts = async () => {
    const response = await fetch(
      "http://localhost:3001/lifts"
    );
      const data = await response.json()
      setLifts(data)
  }
  useEffect(() => {
    fetchlifts();
  }, []);
  
    return (
      <div className="container1">
          <h2>Current Bests</h2>
          <div className="lift-card-container">
            {lifts.map((lift) => (
                <LiftCard key={lift._id} lift={lift}/>
            ))}
          </div>
      </div>
    );
  };
  
  export default Lifts;