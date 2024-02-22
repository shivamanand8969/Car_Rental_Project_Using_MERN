import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Uploadcar.css'


const UpdateCar = () => {
    const params = useParams();
    const [singleData, setSingleData] = useState('');
    const [carname, setCarname] = useState('');
    const [carPrice, setCarPrice] = useState('');
    const [carseat, setCarSeat] = useState('');
    const [carimage, setCarImage] = useState('');
    const id = params.id;
    useEffect(async () => {
        let data = await fetch(`http://localhost:5000/car/owner/update/${id}`);
        data = await data.json();
        setSingleData(data);
        setCarname(data.carname);
        setCarPrice(data.rateperhour);
        setCarSeat(data.totalSheet);
        setCarImage(data.image);
    }, [])
         const handleUpdate=async (e)=>{
            let formData= new FormData();
            formData.append('carname',carname);
            formData.append('totalSheet',carseat);
            formData.append('rateperhour',carPrice);
            formData.append('image',carimage)
            
            e.preventDefault();
            let updatedata=await fetch(`http://localhost:5000/car/owner/update/${id}`,{
                method:"PUT",
                body:formData
            })
            updatedata=await updatedata.json();
            console.log(updatedata)
         }
      
    return (
        <div className="form-container" style={{ marginTop: '40px' }}>
            <h2>Update Car Details</h2>
            <form onSubmit={""}>
                <div className="form-group">
                    <label>Car Name:</label>
                    <input type="text" value={carname} onChange={(e) => setCarname(e.target.name)} />
                </div>
                <div className="form-group">
                    <label>Number of Seats:</label>
                    <input type="number" value={carseat} onChange={(e) => setCarSeat(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price per Hour:</label>
                    <input type="number" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Update Image:</label>
                    <input type="file" accept="image/*" onChange={(e) => setCarImage(e.target.files[0])} />
                </div>
                <button type="submit" onClick={handleUpdate}>Upload</button>
            </form>
        </div>
    )
}

export default UpdateCar