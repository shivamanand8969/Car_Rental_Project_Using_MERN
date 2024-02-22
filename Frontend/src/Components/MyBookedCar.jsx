import React, { useEffect, useState } from 'react'
import './CarCard.css';

const MyBookedCar = () => {
      const useid=localStorage.getItem('userDetail')
      let id=JSON.parse(useid)._id;

      const [mycardata,setMycarData]=useState([]);
       useEffect(()=>{
        fetch(`http://localhost:5000/carbooking/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setMycarData(res);
            console.log("res",res)
        })
       },[])
    return (
        <div>
            {
                mycardata.map((value,index)=>(
                    <div key={index} style={{ backgroundColor: `#f9f9f9`, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', padding: '10px', maxWidth: '630px' }}>
                    <div className="card">
                        <div className="card-image">
                            <img src="/wp5055262.webp" alt="Car" />
                        </div>
                        <div className="card-info">
                            <h2></h2>
                            <p>Model: Brezza</p>
                            <p>Year: 2002</p>
                            <p>Color: red</p>
                            <p>Seats: 43</p>
                            <p>Doors: 6</p>
                            <p>Price: 200 per day</p>
                            <button className="book-now-button" style={{ backgroundColor: "red" }} >Cencle</button>
                        </div>
                    </div>
                    <div>
                        <h1>Admin : Shivam anand</h1>
                        <h3>Mobile No : 8969171781</h3>
        
                    </div>
                    <div>
        
                    </div>
                </div>
                ))
            }
        </div>
       
    )
}

export default MyBookedCar