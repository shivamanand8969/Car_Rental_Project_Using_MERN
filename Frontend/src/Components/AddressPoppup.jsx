// AddressPopup.js
import React, { useState } from 'react';
import './AddressPopup.css';

const AddressPopup = ({ isOpen, onClose, onSubmit,ownerid, carId }) => {
  const userId=localStorage.getItem('userDetail');
  let userid=JSON.parse(userId)
    
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    pickupDate: '',
    dropoffDate: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSubmit = (e) => {
   console.log("hellow handleSubmit")
    e.preventDefault();
    if (validateForm()) {
      onSubmit(addressData);
      setAddressData({
        street: '',
        city: '',
        state: '',
        pinCode: '',
        country: '',
        pickupDate: '',
        dropoffDate: '',
      });
       
      onClose();
    }
  };
  
     const carbooking=async ()=>{
     let data=await fetch('http://localhost:5000/carbooking/bookcar',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          carownerId:ownerid,
          userId:userid._id,
          userstreet:addressData.street,
          userCity:addressData.city,
          userState:addressData.state,
          userPinCode:addressData.pinCode,
          userCountry:addressData.country,
          carpickDate:addressData.pickupDate,
          carDroupDate:addressData.dropoffDate,
          carId:carId
        })
      })
      data=await data.json()
      alert(data.messag);
      if(data.messag==="Data Saved SuccessFully"){
        onClose();        
      }
     }
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!addressData.street.trim()) {
      newErrors.street = 'Street address is required';
      isValid = false;
    }
    if (!addressData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    if (!addressData.state.trim()) {
      newErrors.state = 'State is required';
      isValid = false;
    }
    if (!addressData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
      isValid = false;
    }
    if (!addressData.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }
    if (!addressData.pickupDate) {
      newErrors.pickupDate = 'Pick-up date is required';
      isValid = false;
    }
    if (!addressData.dropoffDate) {
      newErrors.dropoffDate = 'Drop-off date is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="address-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Enter Your Address</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={addressData.street}
              onChange={handleChange}
              required
            />
            {errors.street && <span className="error">{errors.street}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={addressData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={addressData.state}
              onChange={handleChange}
              required
            />
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="pinCode"
              placeholder="pinCode"
              value={addressData.pinCode}
              onChange={handleChange}
              required
            />
            {errors.postalCode && <span className="error">{errors.postalCode}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={addressData.country}
              onChange={handleChange}
              required
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="pickupDate">Pick-up Date:</label>
            <input
              type="date"
              name="pickupDate"
              id="pickupDate"
              value={addressData.pickupDate}
              onChange={handleChange}
              required
            />
            {errors.pickupDate && <span className="error">{errors.pickupDate}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="dropoffDate">Drop-off Date:</label>
            <input
              type="date"
              name="dropoffDate"
              id="dropoffDate"
              value={addressData.dropoffDate}
              onChange={handleChange}
              required
            />
            {errors.dropoffDate && <span className="error">{errors.dropoffDate}</span>}
          </div>
          <button type="button" onClick={carbooking}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddressPopup;
