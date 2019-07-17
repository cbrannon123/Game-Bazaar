import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand">Game Bazaar</h1>
            <br />
            {props.user ? (
                <span style={{fontWeight: 'bolder', color: 'white'}} className="navbar-brand">Hello {props.user.name}!</span>
            ) : (
                    <span className="navbar-brand">Please Sign In !</span>
                )}
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    {props.user ? (
                        <>
                            <li className="nav-item active">
                                <Link to={'/index'} className="nav-link">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/game'} className='nav-link' >Enter A Game</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'} className='nav-link' onClick={props.handleLogOut}>Log Out</Link>
                            </li>
                        </>
                    ) : (
                            <>
                                <li className="nav-item">
                                    <Link to={'/login'} className="nav-link">Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signup'} className="nav-link">Sign Up</Link>
                                </li>
                            </>
                        )}
                </ul>
            </div>
        </nav>


    )
}

export default NavBar;
