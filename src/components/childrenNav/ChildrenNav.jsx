import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "./../../images/boy.png"
import addIcon from "./../../images/addIcon.png"
import "./ChildrenNav.css"

const children = [
    {
        id: 1,
        name: "Brajanusz"
    },
    {
        id: 2,
        name: "Dżesika"
    },
    {
        id: 3,
        name: "Gracjan"
    }
]

function ChildrenNav() {
    const [activeChild, setActiveChild] = useState(1);
    return (
        <>
            <div className="child-wrapper">
                {children.map(({id, name}) => (
                    <div key={id} className="child-avatar-box" onClick={() => setActiveChild(id)}>
                        <img className={activeChild === id ? "child-avatar child-active" : "child-avatar"} src={avatar} alt="Child" />
                        <p>{name}</p>
                    </div>))}
                <Link to="/addchild">   
                    <img src={addIcon} alt="addIcon" className="add_icon"/>
                </Link>              
            </div>
            <div>
                <Link className="btn" to="/addChild">Edytuj</Link>
                <Link className="btn" to="/">Historia dawkowania</Link>
            </div>
        </>
    )}

export default ChildrenNav;