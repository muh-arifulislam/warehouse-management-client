import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWarehouse } from '@fortawesome/free-solid-svg-icons'
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
        <header>
            <Navbar className=' py-3 ' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/" ><FontAwesomeIcon className='me-1 fs-4' icon={faWarehouse}></FontAwesomeIcon><span className='site-heading fs-4'>BISMILLAH TRADERS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='custom-nav-item' to='/'>Home</Link>
                            <Link className='custom-nav-item' to='/manage-inventory'>Manage Inventory</Link>
                            <Link className='custom-nav-item' to='/blog'>Blog</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Link className='custom-nav-item' to='/add-new-item'>Add Item</Link>
                                    <Link className='custom-nav-item' to='/my-item'>My Item</Link>
                                </>
                            }
                            {
                                user ? <button className='auth-btn' onClick={handleSignOut}>Log Out</button> :
                                    pathname === '/login' ? <Link className='auth-btn' to='/register'>Register</Link> :
                                        <Link className='auth-btn' to='/login'>Login</Link>

                            }
                            <Link id='user-btn' to='/user'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;