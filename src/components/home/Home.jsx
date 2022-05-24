import React from "react";
import { Link } from "react-router-dom";
import"./../navBar/NavBar.css"

function Home() {
    return (
        <header className="navbar">
            <Link to="/">#NavBar</Link>
            <Link to="/login">#Login</Link>
            <Link to="/addChild">#Add Child</Link>
            <Link to="/drugsfinder">#Drugs Finder</Link>
        </header>
    )
}

export default Home;