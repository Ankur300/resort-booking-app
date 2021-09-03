import React from "react";
import axios from "axios";
//import Navbar from "./Navbar";

export default class MyBookings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { book: [] };
    }
    componentDidMount() {
        axios.get("/booking").then((res) => {
            this.setState({ book: res.data });
            console.log(res);
        });
    }

    render() {
        console.log(this.state.book);
        return (
            <>
                <div
                    className="container py-2 mt-2"
                    style={{
                        position: "absolute",
                        top: "100px",
                    }}
                >
                    <table
                        className="table table-dark table-bordered table-hover"
                        border="3"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Number of People</th>
                                <th scope="col">Checkin date</th>
                                <th scope="col">Checkout date</th>
                            </tr>
                        </thead>

                        {this.state.book.map((user) => (
                            <tbody>
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.number}</td>
                                    <td>{user.numberofpeople}</td>
                                    <td>{user.checkin}</td>
                                    <td>{user.checkout}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </>
        );
    }
}
