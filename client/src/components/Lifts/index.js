import React, { useEffect, useState } from 'react';
import LiftCard from '../LiftCard'



const Lifts = () => {
  const [lifts, setLifts] = useState([]);

  const fetchlifts = async () => {
    const response = await fetch(
      "http://localhost:3001/"
    );
      const data = await response.json()
      setLifts(data)
  }
  useEffect(() => {
    fetchlifts();
  });
    // console.log('loading', loading)
    // console.log("liftsData1", data)
    // setTimeout(() => (console.log("liftsData2", data, loading)), 5000)
    // setTimeout(() => (console.log("liftsData3", data, loading)), 10000)
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`
    return (
      <div className="container">
          <h2>Current Bests</h2>
          {lifts.map((lift) => (
              <LiftCard key={lift._id} lift={lift}/>
          ))}

      </div>
    );
  };
  
  export default Lifts;