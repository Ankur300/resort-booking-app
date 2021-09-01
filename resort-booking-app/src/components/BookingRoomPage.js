import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SingleRoom from "../images/SingleRoom.jpg";
import SingleRoom1 from "../images/SingleRoom1.jpg";
import SingleRoom2 from "../images/SingleRoom2.jpg";
import BookingForm from "./BookingForm";

function BookingRoomPage() {
    // const [titleName, SetTitleName] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>Booking Form</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm />
                </Modal.Body>
            </Modal>{" "}
            <div className="booking_room">
                <div className="booking_banner">
                    <div className="booking_banner_content">
                        {/* <h1>You Are in {titleName}</h1> */}
                        <h1>You Are in Booking Page</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <figure>
                                <img src={SingleRoom} alt="SingleRoom" />
                            </figure>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <figure>
                                <img src={SingleRoom1} alt="SingleRoom1" />
                            </figure>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <figure>
                                <img src={SingleRoom2} alt="SingleRoom2" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <section className="col-sm-12 col-lg-6">
                            <h2>Details for Room</h2>
                            <p>
                                Lorem ipsum is a placeholder text commonly used
                                to demonstrate the visual form of a document or
                                a typeface without relying on meaningful
                                content. Lorem ipsum may be used as a
                                placeholder before final copy is available.
                            </p>
                            <p>
                                Lorem ipsum is a placeholder text commonly used
                                to demonstrate the visual form of a document or
                                a typeface without relying on meaningful
                                content. Lorem ipsum may be used as a
                                placeholder before final copy is available.
                            </p>
                        </section>
                        <section className="col-sm-12 col-lg-6">
                            <h2>facilities</h2>
                            <p>
                                Lorem ipsum is a placeholder text commonly used
                                to demonstrate the visual form of a document or
                                a typeface without relying on meaningful
                                content. Lorem ipsum may be used as a
                                placeholder before final copy is available.
                            </p>
                            <p>
                                Lorem ipsum is a placeholder text commonly used
                                to demonstrate the visual form of a document or
                                a typeface without relying on meaningful
                                content. Lorem ipsum may be used as a
                                placeholder before final copy is available.
                            </p>
                        </section>
                    </div>
                    <div className="action-toolbar-grid gap-2 col-6 mx-auto">
                        <button style={{ width: "100%" }} className="btn-lg btn-warning" onClick={handleShow}>Book a Room</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingRoomPage;
