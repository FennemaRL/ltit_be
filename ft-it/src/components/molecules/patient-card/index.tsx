import React from 'react';
import "./card-style.css";
const Card = ({ patient, displayAll, onClick }) => {
  return (
    <div className='card'>
      <img src={patient.photoIdentityDocument} />
      <div className='card-content'>
        <p>Name: {patient.name}</p>
        {displayAll &&
          <>
          <p>Email: {patient.email}</p>
          <p>Addres: {patient.address}</p>
          <p>Phone: {`+${patient.phoneNumber.countryCharacteristic} ${patient.phoneNumber.number}`}</p></>
        }
        <p style={{ textAlign: displayAll ? 'right' : 'left', cursor: 'pointer' }} onClick={onClick}>...</p>
      </div>
    </div>
  );
};

export default Card