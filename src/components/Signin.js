import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import '../css/Custom.css'
import { useFormik } from 'formik'
import { navigate } from '@reach/router';
import {logIn,logOut} from '../redux/login/LoginAction'
import { connect } from 'react-redux'



function Signin(props) {
    const initialValues = {
        email: '',
        password: ''
    }
    
    const validate = values => {
        let errors = {}
        if (!values.email) {
            errors.email = "Required"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Please enter valid email"
        }
        if (!values.password) {
            errors.password = "Required"
        }
    
        return errors
    }

    const onSubmit = values => {
        var users = JSON.parse(localStorage.getItem('users')) || [];

        if(users.length==0)
        {
            setInvalidCreds("No user exists in database please sign up first")
        }
    
        users.forEach(user => {
            if (user.email === values.email && user.password === values.password) {
                setInvalidCreds("")
                console.log(user);
                props.logIn(user.name);
                navigate('/')
            }
            else {
                setInvalidCreds("Invalid Crediantials")
            }
        });
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    const [invalidCreds,setInvalidCreds]=useState('');
    return (
        <div className='flex-column'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signin
                </Button>
            </Form>
            <h6 className="text-danger">{invalidCreds}</h6>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        loginstate:state.login
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return {
        logIn:(name)=>dispatch(logIn(name)),
        logOut:(name)=>dispatch(logOut(name))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Signin)
