import React from 'react'
import { useFormik } from 'formik'
import { Form, Button } from 'react-bootstrap';
import '../css/Custom.css'
import { navigate } from '@reach/router';

const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
    profession: ''
}

const onSubmit = values => {
    var users = JSON.parse(localStorage.getItem('users'))|| [];
    users.push(values)
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/signin');
}
const validate = values => {
    let errors = {}

    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Please enter valid email"
    }
    else{
        var users = JSON.parse(localStorage.getItem('users'))|| [];

        users.forEach(user => {
            if(user.email===values.email)
            {
                errors.email="Email already exist"
            }
        });
    }
    if (!values.password) {
        errors.password = "Required"
    }
    if (!values.phone) {
        errors.phone = "Required"
    }
    if (values.profession == 0) {
        errors.profession = "Required"
    }

    return errors
}
function Signup() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div className='flex-column'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                </Form.Group>
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
                <Form.Group>
                    <Form.Label>PhoneNo</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" name="phone" {...formik.getFieldProps('phone')} />
                    {formik.touched.phone && formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Profession</Form.Label>
                    <Form.Control
                        as="select"
                        custom name="profession" value={formik.values.profession}
                        {...formik.getFieldProps('profession')}
                    >
                        <option value="0">Choose...</option>
                        <option value="1">Student</option>
                        <option value="2">Engineer</option>
                        <option value="3">Lawyer</option>
                    </Form.Control>
                    {formik.touched.profession && formik.errors.profession ? <div className="text-danger">{formik.errors.profession}</div> : null}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Signup
