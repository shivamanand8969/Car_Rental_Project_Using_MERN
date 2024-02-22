import React, { useEffect } from 'react'
import CarCard from './AdminCarCard'
import { useState } from 'react';

const Manage = () => {
     const [data,setData]=useState([]);
     const Admindata=JSON.parse(localStorage.getItem('admindata'));
     console.log(Admindata)
     const [refresh,setRefresh]=useState(false);
     useEffect(()=>{
      fetch(`http://localhost:5000/car/owner/${Admindata._id}`).then((res)=>(res.json()))
      .then((res)=>{
        setData(res)
        console.log("Res",res);
      })
     },[refresh])
  return (
    <div>
      {
        data.map((value)=>(
          <CarCard key={value.carname} name={value.carname} imageUrl={value.image} rentPrice={value.rateperhour} id={value._id} setRefresh={setRefresh} refresh={refresh} />
        ))
      }
    </div>
  )
}

export default Manage