import React from "react";
import resort from "../images/resort.png";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        var sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: "url(" + { resort } + ")",
        };
    }

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-secondary bg-dark">
                    <div class="container cle" style={this.sectionStyle}>
                        <NavLink class="nav-link" to="/">
                            <img src={resort} alt="logo" width="100px" />
                        </NavLink>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse float-end"
                            id="navbarNav"
                        >
                            <ul class="navbar-nav">
                                
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/Booking">
                                        Book a Resort Room
                                    </NavLink>
                                </li>
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/ContactUs">
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/Login">
                                        Login
                                    </NavLink>
                                </li>
                                <li class="nav-item px-2">
                                    <NavLink class="nav-link" to="/MyBookings">
                                        My Bookings
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
