import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import PatientList from '../organisms/patient/list/patient-list';

const imageUrl ='https://upload.wikimedia.org/wikipedia/commons/c/cb/Biometric_Argentine_DNI_for_Citizens-Foreigners.png';
const items = [{
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  address: "456 Maple Street, Greenville",
  phoneNumber: {
      countryCharacteristic: 1,
      number: 2345678901,
  },
  photoIdentityDocument: imageUrl,
},{
  name: "Bob Smith",
  email: "bob.smith@example.com",
  address: "789 Oak Avenue, Centerville",
  phoneNumber: {
      countryCharacteristic: 44,
      number: 7812345678,
  },
  photoIdentityDocument: imageUrl,
},{
  name: "Carlos Martinez",
  email: "carlos.martinez@example.com",
  address: "123 Palm Street, Miami",
  phoneNumber: {
      countryCharacteristic: 52,
      number: 5512345678,
  },
  photoIdentityDocument: imageUrl,
}, {
  name: "Diana Lee",
  email: "diana.lee@example.com",
  address: "321 Pine Road, San Francisco",
  phoneNumber: {
      countryCharacteristic: 86,
      number: 10123456789,
  },
  photoIdentityDocument:imageUrl,
},{
  name: "Ethan Brown",
  email: "ethan.brown@example.com",
  address: "987 Willow Lane, Boston",
  phoneNumber: {
      countryCharacteristic: 49,
      number: 15123456789,
  },
  photoIdentityDocument: imageUrl,
}];

const Home = () => {
  return (
    <MainTemplate>
      <PatientList items={items}/>
    </MainTemplate>
  );
};

export default Home;