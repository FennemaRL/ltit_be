import React, { useState } from 'react';
import "./form-style.css";
const PatientForm = ({ onSubmit, initialValues = {} }) => {
  const [formData, setFormData] = useState({
    name: initialValues.name || "",
    email: initialValues.email || "",
    address: initialValues.address || "",
    phoneNumber: {
      countryCharacteristic: initialValues.phoneNumber?.countryCharacteristic || 1,
      number: initialValues.phoneNumber?.number || "",
    },
    photoIdentityDocument: initialValues.photoIdentityDocument || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Handle nested objects (phoneNumber)
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) {
          error = 'Name is required';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'address':
        if (!value) {
          error = 'Address is required';
        }
        break;
      case 'phoneNumber.countryCharacteristic':
        if (!value || isNaN(value)) {
          error = 'Country code must be a number';
        }
        break;
      case 'phoneNumber.number':
        if (!value || isNaN(value)) {
          error = 'Phone number must be a number';
        }
        break;
      case 'photoIdentityDocument':
        if (!value || !/^https?:\/\/.*\.(jpg|jpeg|png)$/.test(value)) {
          //error = 'Invalid photo ID URL (must be a valid image URL)';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass the form data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className='patient-form'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div>
        <label htmlFor="countryCharacteristic">Country Code:</label>
        <input
          type="number"
          id="countryCharacteristic"
          name="phoneNumber.countryCharacteristic"
          value={formData.phoneNumber.countryCharacteristic}
          onChange={handleChange}
        />
        {errors.phoneNumber?.countryCharacteristic && <p className="error">{errors.phoneNumber?.countryCharacteristic}</p>}
        <label htmlFor="number">Phone Number:</label>
        <input
          type="number"
          id="number"
          name="phoneNumber.number"
          value={formData.phoneNumber.number}
          onChange={handleChange}
        />
        {errors.phoneNumber?.number && <p className="error">{errors.phoneNumber?.number}</p>}
        
      </div>
      <div>
        <label htmlFor="photoIdentityDocument">Photo ID URL:</label>
        <input
          type="url"
          id="photoIdentityDocument"
          name="photoIdentityDocument"
          value={formData.photoIdentityDocument}
          onChange={handleChange}
        />
        {errors.photoIdentityDocument && <p className="error">{errors.photoIdentityDocument}</p>}
      </div>
      <button type="submit" disabled= {Object.keys(errors).some(e=>errors[e])}>Submit</button>
    </form>
  );
};

export default PatientForm;