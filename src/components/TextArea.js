
import React, { useState } from 'react'

export default function TextArea(props) {

    //Text Area fucntion
    const handleOnChange = (event) => {
        console.log("On changed")
        setText(event.target.value);
    }
    // Function for UpperCase
    const handleUpClick = () => {
        console.log("Event is clicked");
        let sentence = text.toUpperCase();
        setText(sentence);
    }
    //Function for Lowercase to text
    const handleLowerCase = () => {
        let newsentence = text.toLowerCase();
        setText(newsentence);
    }

    //function for removing the space form text
    const handleRemoveSpace = () => {
        let newText = text.replaceAll(" ", "");
        setText(newText);
        console.log("Clicked");
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h2>Enter the text here...</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2 ' onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2 ' onClick={handleRemoveSpace}>Remove the Space</button>

            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and  {text.length} characters</p>
                <p>{ 0.08 * text.split(" ").length} Minutes reads</p>
                <h3>Preview</h3>
                <p>{text}</p>

                
            </div>
        </>
    )
}
