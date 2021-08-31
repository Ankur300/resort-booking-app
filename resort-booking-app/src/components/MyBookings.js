import React from "react";
import axios from 'axios';
//import Navbar from "./Navbar";

export default class MyBookings extends React.Component
{ 
    constructor (props) {
    super (props);
    this.state = {users: [],};
}
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) =>{
    this.setState({ users: res.data });
    console.log(res);
    });

}

render() { console.log(this.state.users);
    return (
    <>
    {/* <Navbar/> */}
    <table class="table table-success table-striped table-hover">
        <thead class="table-light">
        <tr>
      <th scope="col">Booking-Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Check-In</th>
      <th scope="col">Check-Out</th>
    </tr>
    </thead>
        {this.state.users.map((user) => (
            <tbody>
        <tr >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.chIn}</td>
            <td>{user.chOut}</td>
            </tr>
            </tbody>))}
    </table>
</>
    )
        }
    }
