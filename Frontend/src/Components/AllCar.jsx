import React, { memo, useEffect } from 'react'
import CarCard from './CarCard'
import './Allcar.css'
import { useState } from 'react';
const AllCar = ({isOpen ,carData}) => {
   
  return (
    <div className='allcarbox'>
        {
            carData.map((value)=>(
                <CarCard carData={value} isOpen={isOpen}/>
            ))
        }
       
       
    </div>
  )
}

export default memo(AllCar)