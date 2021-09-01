import React from "react";
import images from "../images/img1.jpg";
import { useHistory, Link } from "react-router-dom";


function HomePage() {
    const history = useHistory();
    console.log(history);
    const resortbtn = (event) => {
        event.preventDefault();
        history.push("/Booking");
    };
    return (
        <>
            <div className="home_banner">
                <div className="home_banner_content">
                    <h1>Banner Content</h1>
                    <button className="btn btn-warning" onClick={resortbtn}>
                        Go To Our Resort Rooms
                    </button>
                </div>
            </div>
            <div className="resort_cotent container">
                <h2>Explore for Resort Rooms</h2>
                <ul className="row">
                    <li className="col-sm-12 col-md-6 col-lg-4">
                        <Link className="product-info" to="/BookingRoomPage">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Single Room</h3>
                            </div>
                        </Link>
                    </li>
                    <li className="col-sm-12 col-md-6 col-lg-4">
                        <Link className="product-info" to="/BookingRoomPage">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Double Room</h3>
                            </div>
                        </Link>
                    </li>
                    <li className="col-sm-12 col-md-6 col-lg-4">
                        <Link className="product-info" to="/BookingRoomPage">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Family Trip</h3>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <section>
                    <h2>Benifits for Booking Resort Room</h2>
                    <p>Additional Benifities for Customers booking rooms.</p>
                    <ul>
                        <li>--  to be useful or profitable to The changes will benefit everyone.</li>
                        <li>--  to be helped He'll benefit from new experiences.</li>
                        <li>--  Cab Specilities</li>
                        <li>--  Avaliabllity checking for every 12 hours</li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default HomePage;
