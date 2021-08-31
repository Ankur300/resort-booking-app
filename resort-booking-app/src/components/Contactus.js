import React from "react";

class Contactus extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="contact-section">
                        <h2 className="ct-section-head">Contact Us to Share Your's FeedBack</h2>
                        <div className="row contact-fields">
                            <div className="col-md-8 left-form">
                                <form>
                                    <div className="form-group">
                                        <label className="sr-only" for="fname">
                                            First Name *
                                        </label>
                                        <input
                                            className="required form-control"
                                            id="fname"
                                            name="fname"
                                            placeholder="First Name&nbsp;*"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="lname">
                                            Last Name *
                                        </label>
                                        <input
                                            className="required form-control"
                                            id="lname"
                                            name="lname"
                                            placeholder="Last Name&nbsp;*"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="sr-only"
                                            for="contactEmail"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            className="required form-control h5-email"
                                            id="contactEmail"
                                            name="contactEmail"
                                            placeholder="Email&nbsp;*"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="sr-only"
                                            for="contactPhone"
                                        >
                                            Phone *
                                        </label>
                                        <input
                                            className="required form-control h5-phone"
                                            id="contactPhone"
                                            name="contactPhone"
                                            placeholder="Phone&nbsp;*"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="sr-only"
                                            for="comment"
                                        >
                                            Type your message here
                                        </label>
                                        <textarea
                                            className="required form-control"
                                            id="comment"
                                            name="comment"
                                            placeholder="Type your message here&nbsp;*"
                                            rows="6"
                                        ></textarea>
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-4 contact-info">
                                <div className="phone">
                                    <h2>Call</h2>
                                    <a href="tel:+4046872730">7687678745</a>
                                </div>
                                <div className="email">
                                    <h2>Email</h2>
                                    <a href="mailto:info@decidedekalb.com">
                                        info@cricket2020.com
                                    </a>
                                </div>
                                <div className="location">
                                    <h2>Visit</h2>
                                    <p>
                                        One Town Center 123 Easy Street
                                        Delhi,110001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactus;
