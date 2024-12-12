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
const PatientList = ({ items, isloading, error, registerPatient }) => {
  const [actives, setActives] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleActive = (indexToHandle) => {
    setActives(prevActives => prevActives.map((active, index) => {
      return indexToHandle === index ? !active : active
    }))
  }

  useEffect(() => {
    if (items?.length) {
      setActives(items.map(() => false))
    }
  }, [items])
  //@Technical deb move popup behavior to his own component
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleOnSubmit = (patient) => {
    registerPatient(patient)
    handleClosePopup()
  };

  return (
    <div className="list-container">
      <div className="list-header" >
        <h2> Patient List </h2>
        <svg className='register' onClick={handleOpenPopup} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 18L14 18M17 15V21M7.68213 14C8.63244 14.6318 9.77319 15 10.9999 15C11.7012 15 12.3744 14.8797 13 14.6586M10.5 21H5.6C5.03995 21 4.75992 21 4.54601 20.891C4.35785 20.7951 4.20487 20.6422 4.10899 20.454C4 20.2401 4 19.9601 4 19.4V17C4 15.3431 5.34315 14 7 14H7.5M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="card-list">
        {!isloading && !error && items && items.map((item, index) => (
          <Card key={index} patient={item} onClick={() => handleActive(index)} displayAll={actives[index]} />
        ))}
        {
          !items?.length && < NoContent />
        }
        <div>

          {isPopupOpen && ReactDOM.createPortal(
            <div className="popup">
              <PatientForm onSubmit={handleOnSubmit} closePopUp={handleClosePopup} />
            </div>,
            document.body
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientList;