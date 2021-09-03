import React from "react";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";

function BookingConfirmationPage() {
    const location = useLocation();
    console.log(location);
    const customer = location.state;
    return (
        <>
            <div className="container">
                <div className="booking_confirmation row">
                    <h1>Booking Confirmed</h1>
                    <div className="col-sm-12 col-lg-6">
                        <h2>Person Details</h2>
                        <div clasName="customerdetails">
                            <p>Name : {customer.username}</p>
                            <p>Contact No. : {customer.number}</p>
                            <p>Email Id : {customer.email}</p>
                            <p>Gender : {customer.gender}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <h2>Room Details</h2>
                        <div clasName="customerdetails">
                            <p>Number of People : {customer.nopeople}</p>
                            <p>Check In : {customer.chIn}</p>
                            <p>Check Out : {customer.chOut}</p>
                            <p><h3>Payment Mode : </h3> {customer.mop}</p>
                        </div>
                    </div>
                </div>
                <Link className="btn btn-warning m-2" to="/">Goto Home Page</Link>
                <Link className="btn btn-warning m-2" to="/MyBookings">My Bookings</Link>
                <Link className="btn btn-warning m-2" to="/Booking">Goto Booking Page</Link>
            </div>
        </>
    );
}

export default BookingConfirmationPage;
