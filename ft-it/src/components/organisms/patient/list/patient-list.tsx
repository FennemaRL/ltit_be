import React, { useEffect, useState } from 'react';
import Card from '../../../molecules/patient-card';
import "./list-style.css";

const NoContent = () => {
  return (
    <div className="no-content">
      <p className="no-content-message">No items found :(</p>
    </div>
  );
};
const PatientList = ({ items }) => {
  const [actives, setActives] = useState(items.map(() => false));
  const handleActive = (indexToHandle) => {
    setActives(prevActives => prevActives.map((active, index) => {
        return indexToHandle === index? !active : active
    }))
  }
  return (
    <div className="list-container">
      <div className="list-header" >
        <p> Patient List </p>
      </div>
      <div className="card-list">
        {items.map((item, index) => (
          <Card key={index} patient={item} onClick={() => handleActive(index)} displayAll={actives[index]} />
        ))}
        {
          !items.length && < NoContent />
        }
         < Adduser />
      </div>
    </div>
  );
};

export default PatientList;