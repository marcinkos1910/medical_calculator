import React from "react";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";
import NavBar from "../navBar/NavBar";
import"./../navBar/NavBar.css"
import "./Home.css"

function Home() {
    return (
        <>
            <NavBar/>
            <div className="home-card">
                <ChildrenNav/>
                <DrugsFinder/>
            </div>
        </>
    )
}

export default Home;