import React, { useState } from "react";

function Length() {

    /** Hooks */
    const[headingText, setHeading] = useState("String Length");
    const[inText, setInText] = useState("");
    const[isMouseDown, setMouseDown] = useState(false);


    /** Event Handlers */
    function handleMouseDown() {
        setMouseDown(true);
    }

    function handleMouseUp() {
        setMouseDown(false);
        if(inText.length === 0) {
            return;
        }
        setHeading(inText.length);
    }

    function handleChange(event) {
        setHeading("String Length");
        setInText(event.target.value);
    }

    return (
        <>
            <h1>{headingText}</h1>
            <input 
                type="text" 
                name="revString" 
                placeholder="Enter A String"
                onChange={handleChange}
            />
            <button
                style={{backgroundColor: isMouseDown ? "#f5ba13" : "white"}}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                Submit
            </button>
        </>
    );
}

export default Length;