import React, { useState } from "react";

function Reverse() {

    /** Hooks */
    const[headingText, setHeading] = useState("Reverse A String");
    const[inText, setInText] = useState("");
    const[isMouseDown, setMouseDown] = useState(false);

    /** String Reverse Logic */
    function reverseString(str) {
        const revStr = str.split('').reverse().join('');
        return revStr;
    }

    /** Event Handlers */
    function handleMouseDown() {
        setMouseDown(true);
    }

    function handleMouseUp() {
        setMouseDown(false);

         if(inText.length === 0) {
            return;
        }

        setHeading(reverseString(inText));
    }

    function handleChange(event) {
        setHeading("Reverse A String");
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

export default Reverse;