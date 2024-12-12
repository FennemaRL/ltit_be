import React, { useCallback, useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import PatientList from '../organisms/patient/list/patient-list';
import useFetchPatient from '../organisms/patient/list/hooks/use-fetch-patients';
import environment from '../../enviroments/environment';


const Home = () => {
  const {data,isLoading,error, fetchData} = useFetchPatient()
    useEffect(()   => {
    fetchData();
  },[])
  const handleRegisterPatient = useCallback( (patient)   => {
    fetch(`${environment.url}/patient/register`, { method: 'POST' ,  headers: {
      'Content-Type': 'application/json'
    },body: JSON.stringify({patient})}).then(fetchData({}));
  },[fetchData])
  return (
    <MainTemplate>
      <PatientList items={data} isLoading={isLoading} error={error} registerPatient={handleRegisterPatient}/>
    </MainTemplate>
  );
};

export default Home;