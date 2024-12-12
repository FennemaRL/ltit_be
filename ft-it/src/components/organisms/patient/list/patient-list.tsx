import React, { useEffect, useState } from 'react';
import Card from '../../../molecules/patient/card';
import "./list-style.css";
import ReactDOM from 'react-dom';
import PatientForm from '../../../molecules/patient/form';

const NoContent = () => {
  return (
    <div className="no-content">
      <p className="no-content-message">No items found :(</p>
    </div>
  );
};
const PatientList = ({ items, isloading, error }) => {
  const [actives, setActives] = useState<Array<boolean>>([]);
  const [isPopupOpen, setIsPopupOpen] = useState( false);

  const handleActive = (indexToHandle) => {
    setActives(prevActives => prevActives.map((active, index) => {
        return indexToHandle === index? !active : active
    }))
  }

  useEffect(()=> {
    if(items?.length){
      setActives(items.map(() => false))
    }
  }, [items])

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="list-container">
      <div className="list-header" onClick={handleOpenPopup}>
        <p > Patient List </p>
        <button onClick={handleOpenPopup}>open popup</button>
      </div>
      <div className="card-list">
        {!isloading && !error && items &&  items.map((item, index) => (
          <Card key={index} patient={item} onClick={() => handleActive(index)} displayAll={actives[index]} />
        ))}
        {
          !items?.length && < NoContent />
        }
        <div>
      <button onClick={handleOpenPopup}>Open Popup</button>
      {isPopupOpen && ReactDOM.createPortal(
        <div className="popup">
          <PatientForm onSubmit={console.log}/>
          <button onClick={handleClosePopup}>Close</button>
        </div>,
        document.body
      )}
    </div>
      </div>
    </div>
  );
};

export default PatientList;