import React from "react";
import images from "../images/img1.jpg";
import rupeeicon from "../images/rupee.png";
import { useHistory } from "react-router-dom";
import BookingPage from "./BookingPage";

function HomePage() {
    const history = useHistory();
    const resortbtn = () => {
        history.push("/BookingPage/");
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
                {/* <h2>Explore for Resort Rooms</h2> */}
                <ul className="row">
                    <li className="col-sm-12 col-md-6 col-lg-4">
                        <div className="product-info">
                            <div>
                                <img src={images} alt="Single Room" />
                            </div>
                            <div className="product_price clearfix">
                                <h3>Single Room</h3>
                                <label>Price</label>
                                <span>
                                    700 <img src={rupeeicon} alt="rupee" />
                                </span>
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
                                <label>Price</label>
                                <span>
                                    700 <img src={rupeeicon} alt="rupee" />
                                </span>
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
                                <label>Price</label>
                                <span>
                                    700 <img src={rupeeicon} alt="rupee" />
                                </span>
                                <button className="btn btn-primary float-end ">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HomePage;
