import React, { useEffect, useState } from 'react';

const LiftCard = ({lift}) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const [newLiftWeight, setNewLiftWeight] = useState('');

  const submitUpdate = () => {
    setEditorOpen(false)
    const date = new Date()
    const month = date.getMonth() + 1
   const day = date.getDate()
   const year = date.getFullYear()
    console.log("i was called")
    if (!newLiftWeight) { alert('weight required!'); return;}
    fetch(`http://localhost:3001/lifts/${lift._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({weight: parseInt(newLiftWeight), dateUpdated:`${month}/${day}/${year}`
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
        window.location.reload()
}
  const openUpdateForm = () => {
    setEditorOpen(true)
  }
    return (
        <div className="lift-card">
          <div className='lift-details'>
            <div className="lift-name">{lift.name}</div>
            <div className="lift-weight">{lift.weight}</div>
            <div className="lift-date">{lift.dateUpdated}</div>
          </div>
          <button onClick={openUpdateForm}>Update PR!</button>
          {editorOpen && (
                      <form>
                      <h3>Congratulations! What is your new PR?</h3>
                      <input id="newLiftWeight" placeholder='weight' onBlur={(e) => setNewLiftWeight(e.target.value)}></input>
                      <button id='submitUpdate' onClick={submitUpdate}>Submit</button>
                    </form>
          )}
        </div>
      );
}

export default LiftCard;