import {React, useState, useEffect} from 'react';

const AddLiftForm = () => {
    const [newLiftName, setNewLiftName] = useState('');
    const [newLiftWeight, setNewLiftWeight] = useState('');
    const submitNewLift = () => {
        console.log("i was called")
        if (!newLiftName || !newLiftWeight) { alert('name and weight required!'); return;}
        fetch('http://localhost:3001/lifts', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: `${newLiftName}`, weight: parseInt(newLiftWeight)})
          })
            .then(response => response.json())
            .then(postResponse => {
              alert('New PR recorded!');
              console.log(postResponse);
            })
            .catch(err => {
              console.log(err);
            });
    }

    return (
        <div className="flex-row">
          <form>
            <h3>Add a new PR!</h3>
            <input id="newLiftName" placeholder='Lift and reps' onBlur={(e) => setNewLiftName(e.target.value)}></input>
            <input id="newLiftWeight" placeholder='weight' onBlur={(e) => setNewLiftWeight(e.target.value)}></input>
            <button id='submitNewLift' onClick={submitNewLift}>Submit</button>
          </form>
          
        </div>
      );
}

export default AddLiftForm;