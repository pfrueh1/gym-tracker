import React, { useEffect, useState } from 'react';

const LiftCard = ({lift}) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const [newLiftWeight, setNewLiftWeight] = useState('');

  const submitUpdate = () => {
    setEditorOpen(false)
    const date = new Date()
    const month = date.getMonth().toString()
   const day = date.getDate().toString()
   const year = date.getFullYear().toString()
    console.log("i was called")
    if (!newLiftWeight) { alert('name and weight required!'); return;}
    fetch(`http://localhost:3001/lifts/${lift._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({weight: parseInt(newLiftWeight), dateUpdated:`${month}/${day}/${year}`
          // `${}/${}/${}`
        })
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
          <div>
            <div>{lift.name}</div>
            <div>{lift.weight}</div>
            <div>{lift.dateUpdated}</div>
          </div>
          {editorOpen ? (
                      <form>
                      <h3>Congratulations! What is your new PR?</h3>
                      <input id="newLiftWeight" placeholder='weight' onBlur={(e) => setNewLiftWeight(e.target.value)}></input>
                      <button id='submitUpdate' onClick={submitUpdate}>Submit</button>
                    </form>
          ):(<button onClick={setEditorOpen(true)}>Update PR!</button>)}
        </div>
      );
}

export default LiftCard;