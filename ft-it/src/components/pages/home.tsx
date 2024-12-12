import React, { useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import PatientList from '../organisms/patient/list/patient-list';
import useFetchPatient from '../organisms/patient/list/hooks/use-fetch-patients';


const Home = () => {
  const {data,isLoading,error, fetchData} = useFetchPatient()

  useEffect(()   => {
    fetchData();
    console.log('fetchData')
  },[])

  return (
    <MainTemplate>
      <PatientList items={data} isLoading={isLoading} error={error}/>
    </MainTemplate>
  );
};

export default Home;