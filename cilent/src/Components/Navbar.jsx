import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../slice/userSlice';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../styles/main.css";

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const navRef = useRef();

    const toggleNavbar = () => {
        navRef.current.classList.toggle('active');
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <header>
            <div className="logo">MyWebsite</div>
            <nav ref={navRef}>
                <Link className="link" to="/" onClick={toggleNavbar}>Home</Link>
                <Link className="link" to="/blog" onClick={toggleNavbar}>Blog</Link>
                {!user?.token ? (
                    <>
                        <Link className="link" to="/login" onClick={toggleNavbar}>Login</Link>
                        <Link className="link" to="/register" onClick={toggleNavbar}>Register</Link>
                    </>
                ) : (
                    <>
                        <Link className="link" to="/add-blog" onClick={toggleNavbar}>Add Blog</Link>
                        <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                    </>
                )}
                <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn nav-hamburger-btn" onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
