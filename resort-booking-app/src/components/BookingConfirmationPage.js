import React from 'react'
import { useLocation } from "react-router-dom";

function BookingConfirmationPage() {
    const location = useLocation();
    console.log(location);
    const namevalue = location.state.name;
    const numberValue = location.state.number;
    return (
        <>
        <div className="container">
            
             <h1>Welcome {namevalue}</h1>
             <h1>Welcome {numberValue}</h1>
        </div>
        </>
    )
}

export default BookingConfirmationPage;
