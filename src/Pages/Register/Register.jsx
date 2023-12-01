import React,{useContext, useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvaiders';
import useTitle from '../../hooks/useTitle';

const Register = () => {

const {createUser}=useContext(AuthContext)
const navigate=useNavigate()
useTitle("Register")

 const handleRegister=(event)=>{
       event.preventDefault();
       const from=event.target;
       const name=from.name.value;
       const photo=from.photo.value;
       const email=from.email.value;
       const password=from.password.value;
       console.log(name ,email, photo, password);

        createUser(email,password)
        .then(result =>{
            const createUser=result.user;
            console.log(createUser);
            navigate("/")
        })
        .catch(error =>{
            console.log(error);
        })
 }

   const [accepted, setAccepted]=useState(false)
  const handleAccepted=(event)=>{
     setAccepted(event.target.checked);
  }


    return (
        <Container className=' w-50 mx-auto'>
            <h1>Please Register</h1>
           <Form onSubmit={handleRegister}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required/>                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo Url" required/>                  
                </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<> Accept <Link  to="/trems"> "Accept Trans and Condition"</Link></>} />
                    </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text>
                   Already  Have an Account <Link to="/login"> Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;