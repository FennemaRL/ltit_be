import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import PatientList from '../organisms/patient/list/patient-list';

const Home = () => {
  return (
    <MainTemplate>
      <PatientList items={items}/>
    </MainTemplate>
  );
};

export default Home;