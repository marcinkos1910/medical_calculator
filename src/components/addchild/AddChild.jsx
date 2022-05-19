import React, { useEffect, useState } from "react";
import boy from "./../../images/boy.png"
import girl from "./../../images/girl.png"
import NavBar from "../navBar/NavBar";
import "./AddChild.css"

function AddChild() {
    const [childName, setChildName] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState("");

    useEffect(() => {
        if (height > 0 && weight > 0) {
            setBMI(Math.round(weight / (height / 100) ** 2));
        }
    }, [height, weight]);

    function validateChildName(e) {
        setChildName(e.target.value);
    }

    function handleGender(e) {
        setGender(e.target.value);
    }

    function handleWeight(e) {
        setWeight(Math.abs(e.target.value))
    }

    function handleHeight(e) {
        setHeight(Math.abs(e.target.value))
    }
    
    return (
        <>
        <NavBar/>
        <div className="profile-card">
            <form>
                <div>
                    <img className="profile-avatar" src={gender === "male" ? boy : girl} alt="Child" />
                    <input 
                        type="text" 
                        placeholder="Imię" 
                        value={childName} 
                        onChange={validateChildName}/>
                    <div>
                        <div className="profile-layout">
                            <label htmlFor="birthday">Data urodzenia</label>
                            <input type="date" id="birthDay"/>
                        </div>
                        <div className="profile-layout">
                            <label htmlFor="weight">Waga</label>
                            <input type="number" id="weight" value={weight} onChange={handleWeight} min="0" max="500"/>
                        </div>
                        <div className="profile-layout">
                            <label htmlFor="height">Wzrost</label>
                            <input type="number" id="height" value={height} onChange={handleHeight} min="0" max="500"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sex">Płeć</label>
                    </div>
                    <div>
                        <label htmlFor="female">Kobieta</label>
                        <input 
                            type="radio" 
                            id="female" 
                            value="female" 
                            name="gender" 
                            onChange={handleGender}/>
                    </div>
                    <div>
                        <label htmlFor="male">Mężczyzna</label>
                        <input 
                            type="radio" 
                            id="male" 
                            value="male" 
                            name="gender" 
                            onChange={handleGender}/>
                    </div>
                </div>
                <div className="profile-layout"> 
                    <label htmlFor="bmi">BMI</label>
                    <input type="text" id="bmi" value={bmi} disabled/>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddChild;