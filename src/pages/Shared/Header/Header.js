import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    let { pathname } = useLocation();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signout Successful')
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/manage-inventory'>Manage Inventory</Link>
                            <Link to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            <Link to='/my-item'>My Item</Link>
                            {
                                user ? <button onClick={handleSignOut}>Log Out</button> :
                                    pathname === '/login' ? <Link to='/register'>Register</Link> :
                                        <Link to='/login'>Login</Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;