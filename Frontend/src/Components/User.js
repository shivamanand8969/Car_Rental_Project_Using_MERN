import React, { useState,useEffect} from 'react'
import './User.css'
import CarRentalBenefits from './Information'
import AllCar from './AllCar'
import AddressPopup from './AddressPoppup'
const User = () => {
    const [location,setLocation]=useState('');
    const [pickUpDate,setPickUpDate]=useState('');
    const [dropUpDate,setDropUpDate]=useState('');
    const [popup,setPopup]=useState(false);
    const [carData,setCarData]=useState([]);
    const [ownerid,setOwnerId]=useState('');
    const [carId,setCarId]=useState('');
    useEffect(()=>{
     fetch('http://localhost:5000/car')
     .then((res)=>res.json())
     .then((res)=>{
         setCarData(res)
     })
    },[])

    const handlesubmit=()=>{

    }
    const isOpen=({carData,carId})=>{
        setOwnerId(carData);
        setCarId(carId)
        setPopup(true)
    }
    const onclose=()=>{
        setPopup(false);
    }
  return (
    <>
    <div className='herosection'>
        <div className='inputboxforuser'>
            <div>
                <select value={location} onChange={(e)=>setLocation(e.target.value)} className='selectBox'>
                    <option hidden>Enter your address ...</option>
                    <option>Purnea</option>
                    <option>Madhepura</option>
                    <option>Supol</option>
                    <option>Panchgachhiya</option>
                </select>
            </div>
            <div className='dateSection'>
                <div>
                    <h3>Pick Up Date</h3>
                    <input type='date' value={pickUpDate} onChange={(e)=>setPickUpDate(e.target.value)}/>
                </div>
                <div>
                    <h3>Drop-off Date</h3>
                    <input type='date' value={dropUpDate} onChange={(e)=>setDropUpDate(e.target.value)}/>
                </div>
                
            </div>
            <div className='searchBtn'>
                    <button onClick={isOpen}>Search</button>
            </div>
        </div>
    </div>
    <AddressPopup isOpen={popup} onClose={onclose} ownerid={ownerid} carId={carId}/>
    <AllCar isOpen={isOpen} carData={carData}/>
    <CarRentalBenefits/>
    </>
  )
}

export default User