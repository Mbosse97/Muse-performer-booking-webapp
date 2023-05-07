import React, { useContext, useState } from "react";
import { Form, Button} from "semantic-ui-react"
import { ADD_USER } from "utils/mutations";
import { useMutation } from "@apollo/client";
import gql from "@apollo/client";
import {AuthContext} from "utils/auth";
import { Link } from "react-router-dom";

function RegisterPage(props) {
    const [errors, setErrors] = useState({});
    const context = useContext(AuthContext);

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        performerName: "",
        password: "",
        instrument: "",
        email: "",
        about: ""
    });

    const [addUser, {loading}] = useMutation(ADD_USER, {
        update(proxy, {data: {register: userData}}){
            console.log(userData)
            context.login(userData)
        },

        variables: values
    });

    const onChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]: value});
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(values);

        addUser();
    }

    return ( 
    <div className='form-container'>
        <Form onSubmit = {onSubmit} noValidate className={loading ? "loading" : ''}>
            <h1 className='page-title'>Register</h1>
            <Form.Input
                label="First Name"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={onChange} 
            />
             <Form.Input
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                type='text'
                value={values.lastName}
                onChange={onChange} 
            />
             <Form.Input
                label="Performer Name"
                placeholder="Performer Name"
                name="performerName"
                type='text'
                value={values.performerName}
                onChange={onChange} 
            />
             <Form.Input
                label="Instrument"
                placeholder="Instrument"
                name="instrument"
                type='test'
                value={values.instrument}
                onChange={onChange} 
            />
             <Form.Input
                label="Email"
                placeholder="Email"
                name="email"
                type='email'
                value={values.email}
                onChange={onChange} 
            />
             <Form.Input
                label="Password"
                placeholder="Password"
                name="password"
                type='password'
                value={values.password}
                onChange={onChange} 
            />
            <Form.Input
                label="About"
                placeholder="About"
                name="about"
                control='textarea'
                value={values.about}
                onChange={onChange} 
            />
            <Button type='submit'>
                Register
            </Button >
        </Form> 

    </div>
    )
}

export default RegisterPage