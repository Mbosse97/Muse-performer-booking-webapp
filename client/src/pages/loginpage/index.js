import React, { useContext, useState } from "react";
import { Form, Button} from "semantic-ui-react"
import { LOGIN_USER } from "utils/mutations";
import { useMutation } from "@apollo/client";
import gql from "@apollo/client";
import {AuthContext} from "utils/auth";
import { Link, Router, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "pages/homepage";


function LoginPage(props) {
    const context = useContext(AuthContext);

    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        password: "",
        email: "",
    });

    const [userLogin, {loading}] = useMutation(LOGIN_USER, {
        update(proxy, {data: {login:userData}}){
            console.log(userData)
            context.login(userData)
        },

        variables: values
    });

    const onChange = (event) => {
        const {name, value} = event.target;

        setValues({...values, [name]: value});
    };

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(values);

        await userLogin();

        navigate('/myprofile');
    }

    return ( 
    <div className='form-container'>
        <Form onSubmit = {onSubmit} noValidate className={loading ? "loading" : ''}>
            <h1 className='page-title'>Login</h1>
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
            <Button type='submit' primary>
                Login
            </Button >
        </Form> 

    </div>
    )
}

export default LoginPage