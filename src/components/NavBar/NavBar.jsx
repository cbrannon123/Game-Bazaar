import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={'/'} className="navbar-brand">Game Bazaar</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            {this.state.user ? (
                <div>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className='NavBar-link' onClick={this.handleLogOut}>LOG OUT</Link>
                    </li>
                </div>
            ) : (
                    <div>
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/signup'} className="nav-link">signup</Link>
                        </li>
                    </div>
                )}
        </ul>
    </div>
</nav>

}

export default NavBar;
