import React, { useEffect, useState } from 'react';
import './Uploadcar.css'
const UploadCar = () => {
  const [carName, setCarName] = useState('');
  const [numSeats, setNumSeats] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [AdminId,setAdminId]=useState('');
  useEffect(()=>{
    setAdminId(JSON.parse(localStorage.getItem('admindata'))._id);
  },[])
  const handleCarNameChange = (e) => {
    setCarName(e.target.value);
  };

  const handleNumSeatsChange = (e) => {
    setNumSeats(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('carname', carName);
    formData.append('totalSheet', numSeats);
    formData.append('rateperhour', price);
    formData.append('image', image);
    formData.append('ownerId',AdminId);
    try {
      
      const response = await fetch('http://localhost:5000/car/uploadcar',{
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload car details');
      }
      console.log(await response.json());

      setCarName('');
      setNumSeats('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading car details:', error.message);
    }
  };

  return (
    <div className="form-container">
  <h2>Upload Car Details</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Car Name:</label>
      <input type="text" value={carName} onChange={handleCarNameChange} />
    </div>
    <div className="form-group">
      <label>Number of Seats:</label>
      <input type="number" value={numSeats} onChange={handleNumSeatsChange} />
    </div>
    <div className="form-group">
      <label>Price per Hour:</label>
      <input type="number" value={price} onChange={handlePriceChange} />
    </div>
    <div className="form-group">
      <label>Upload Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
    <button type="submit">Upload</button>
  </form>
</div>

  );
};

export default UploadCar;
