import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props){
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">sTutor</Link>
    </nav>
}

export default Navbar;