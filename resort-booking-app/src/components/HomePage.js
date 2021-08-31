import React from "react";
import images from "../images/img1.jpg";
import { useHistory } from "react-router-dom";


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
                        <div className="product-info">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Single Room</h3>

                                <button className="btn btn-primary float-end ">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="col-sm-12 col-md-6 col-lg-4">
                        <div className="product-info">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Double Room</h3>

                                <button className="btn btn-primary float-end ">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="col-sm-12 col-md-6 col-lg-4">
                        <div className="product-info">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Family Trip</h3>

                                <button className="btn btn-primary float-end ">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="container">
                <section>
                    <h2>Benifits</h2>
                    <p>Additional Benifities for Customers booking rooms.</p>
                    <ul>
                        <li></li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default HomePage;
