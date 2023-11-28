import React,{useContext} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvaiders';

const Login = () => {
     const {signIn}=useContext(AuthContext);
      const navigate=useNavigate()
    const location=useLocation()
    const form =location.state?.from?.pathname || '/';

    
   const handleLogin=(event)=>{
         event.preventDefault();
         const from=event.target;         
         const email=from.email.value;
         const password=from.password.value;
         console.log(email, password);


         signIn(email,password)
         .then(result =>{
             const loggedUser=result.user;
             console.log(loggedUser);
             navigate(form, {replace:true})
         })
         .catch(error =>{
             console.log(error);
         })
   }

    return (
        <Container className=' w-50 mx-auto'>
            <h1>Please Login</h1>
           <Form onSubmit={handleLogin}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>          
                <Button variant="primary" type="submit">
                    Submit
                </Button> 
                <br />
                <Form.Text>
                   Don't Have an Account <Link to="/register"> Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;