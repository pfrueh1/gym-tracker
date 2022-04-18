import React, { useEffect, useState } from 'react';
import LiftCard from '../LiftCard'
import { gql, useQuery } from '@apollo/client';
import {QUERY_ALL_LIFTS} from '../../utils/queries'



const Lifts = () => {

    const {loading, error, data} = useQuery(QUERY_ALL_LIFTS, { fetchPolicy: 'no-cache' })

    console.log('loading', loading)
    console.log("liftsData1", data)
    setTimeout(() => (console.log("liftsData2", data, loading)), 5000)
    setTimeout(() => (console.log("liftsData3", data, loading)), 10000)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`
    return (
      <div className="container">
          <h2>Current Bests</h2>
          {data.lifts.map((lift) => (
              <LiftCard key={lift._id} lift={lift}/>
          ))}

      </div>
    );
  };
  
  export default Lifts;