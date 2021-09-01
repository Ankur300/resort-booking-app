import React from "react";

export default class BookingOkay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            email: "",
            showComponent: false,
            username: "",
            number: "",
            room: "",
            nopeople: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let values;
        const { username, email, number, room, nopeople } = values;
        const res = await fetch("BookingOkay", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ username, email, number, room, nopeople }),
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container ">
                <div className="field">
                    <label for="name">Name: </label>
                    <div className="control">
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                        ></input>
                    </div>
                </div>
                <label for="number">Number: </label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                ></input>
                <br></br>
                <label for="email">Email Id: </label>
                <input type="text" id="email" className="form-control"></input>
                <br></br>
                <label for="gender">Gender: </label>
                <input type="text" id="gender" className="form-control"></input>
                <br></br>
                <label for="nopeople">
                    Number of people:
                    <select
                        name="nopeople"
                        id="nopeople"
                        className="form-control"
                    >
                        <option option="1">1</option>
                        <option option="2">2</option>
                        <option option="3">3</option>
                        <option option="4">4</option>
                    </select>
                </label>
                <br></br>
                <label for="chIn">Check In:</label>
                <br></br>
                <input type="date" value="0000-00-00"></input>
                <br></br>
                <label for="chOut">Check Out:</label>
                <br></br>
                <input type="date" value="0000-00-00"></input>
                <br></br>
                <label for="payment">
                    Mode of payment:
                    <select name="mop" id="mop" className="form-control">
                        <option option="poh">Pay at checkIn</option>
                        <option option="card">Card</option>
                    </select>
                </label>
                <br></br>
                <button className="btn btn-dark" onClick={this.handleSubmit}>
                    Confirm
                </button>
            </form>
        );
    }
}
