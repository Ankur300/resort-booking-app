import React from "react";
import { Form, Button } from "react-bootstrap";
import useForm from "./UseForm";
import validation from "./validation";
import {Link} from 'react-router-dom';

function Registration() {
    const { handleChange, values, handleSubmit, errors } = useForm(validation);
    return (
        <div className="container register_container" >
            <h1>Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Enter UserName</Form.Label>
                    <Form.Control
                        type="name"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                    />
                </Form.Group>
                {errors.username && <p>{errors.username}</p>}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.email && <p>{errors.email}</p>}
                <Form.Group
                    className="mb-3"
                    name="number"
                    controlId="formGroupEmail"
                >
                    <Form.Label>Enter Mobile Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter mobile number"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.number && <p>{errors.number}</p>}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Enter password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label> Enter confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password2"
                        placeholder="Password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password2 && <p>{errors.password2}</p>}
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="submit" value="Submit" className="btn btn-primary"/>
                </Form.Group>
            </Form>

            <h5>
                {" "}
                Already have account{" "}
                <Link to="/Login">

                <span style={{ color: "red" }}> Login</span>
                </Link>
            </h5>
        </div>
    );
}

export default Registration;
