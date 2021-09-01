import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validation from "./validation";
import {Link} from "react-router-dom";

const initialvalues = {
    email: "",
    password: "",
};

export default function Login() {
    const [values, setValuse] = useState(initialvalues);

    const getData = (e) => {
        setValuse({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const submit_Data = (e) => {
        e.preventDefault();

        if (
            "Brillio@gmail.com" === values.email &&
            "Brillio123" === values.password
        ) {
            alert("login sucesfully");
        } else {
            console.log("error");
        }
    };
    return (
        <div className="container login_container">
            <Form onSubmit={submit_Data}>
                <h1>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={getData}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={getData}
                        placeholder="Password"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h5>
                {" "}
                Join Us Now!{" "}
                <Link to="/Register">

                <span style={{ color: "red" }}> Register</span>
                </Link>
            </h5>
        </div>
    );
}
