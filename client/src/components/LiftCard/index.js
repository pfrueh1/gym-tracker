import React from 'react';

const LiftCard = ({lift}) => {

    return (
        <div className="flex-row">
          <div>
            <div>{lift.name}</div>
            <div>{lift.weight}</div>
            <div>{lift.dateUpdated}</div>
          </div>
        </div>
      );
}

export default LiftCard;