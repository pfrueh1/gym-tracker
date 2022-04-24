import React from "react";
import AddLiftForm from '../components/AddLiftForm'
import Lifts from '../components/Lifts'

const Home = () => {
  return (
    <div className="container">
      <AddLiftForm/>
      <Lifts/>
    </div>
  );
};

export default Home;