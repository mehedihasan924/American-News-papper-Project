import React , {useContext} from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvaiders';

const Navigationbar = () => {
    const {user, logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch( error =>console.log(error))
    }
    return (
       <Container>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary d-flex align-items-center ">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/">Home</Link> 
                            <Nav.Link href="#pricing">About</Nav.Link>  
                            <Nav.Link href="#pricing">Creer</Nav.Link>                                         
                        </Nav>
                     <Nav>
                          { 
                             user && <FaUserCircle style={{fontSize: "2rem"}}/>
                           }                     
                           {
                              user ?  <Link to="/register"> <Button onClick={handleLogOut} variant="secondary">Log-Out</Button></Link>:
                              <Link to="/login"> <Button variant="secondary">Login</Button></Link>
                              }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </Container>
    );
};

export default Navigationbar;