import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({ search }) => {
    const [q, setQ] = useState("")
    return (

        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Cinema</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cinema" className="nav-link">Cinema</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/anime" className="nav-link">Anime</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cartoon" className="nav-link">Cartoon</NavLink>
                    </li>
                    <li className="nav-item">
                        <input value={q} onChange={(e) => {
                            setQ(e.currentTarget.value)
                        }} className="redly" type="text" name="поиск" id="1" />
                        <button onClick={() => { search(q) }} className="btn btn-primary">
                            Поиск
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;