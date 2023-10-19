
import React, { useState } from 'react';

export default function TextArea(props) {

    //Text Area fucntion
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    // Function for UpperCase
    const handleUpClick = () => {
        let sentence = text.toUpperCase();
        setText(sentence);
        props.showAlert1("Converted to UpperCase!","sucess");
    }
    //Function for Lowercase to text
    const handleLowerCase = () => {
        let newsentence = text.toLowerCase();
        setText(newsentence);
        props.showAlert1("Converted to LowerCase!","sucess");
    }

    //function for removing the space form text
    const handleRemoveSpace = () => {
        // let newText = text.replaceAll(" ", "");
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert1("Remove extra spaces","sucess");

    }
    //function for clear the text
    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert1("Clear the text","sucess");
    }

    // functtion for changing the font
    // const handleChangeFont = () => {
    //     let newText = text;
    //     <style>

    //     </style>
    // }

    function convertBinary() {
        var output = document.getElementById("outputBinary");
        var input = document.getElementById("inputBinary").value;
        output.value = "";
        for (let i = 0; i < input.length; i++) {
            var e = input[i].charCodeAt(0);
            var s = "";
            do {
                var a = e % 2;
                e = (e - a) / 2;
                s = a + s;
            } while (e !== 0);
            while (s.length < 8) {
                s = "0" + s;
            }
            output.value += s;
        }
    }
    //function for copy text
    const handleCopyText = () => {

        let text = document.getElementById("myBox");
        console.log(text);
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert1("Copied to clipboard","sucess");
    }



    const [text, setText] = useState('');
    return (
        <>
            <div className="container py-5" style={{color : props.mode==='light'?'black':'white'}}>
                <h2 style={{color : props.mode==='light'?'black':'white'}} >Enter the text here...</h2>
                <div className="mb-3">
                    <textarea autoFocus className="form-control rad rad2" id="myBox" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='light'?'white':'#262626',color : props.mode==='light'?'black':'white' }} placeholder='Start typing, or copy and paste your document here...' rows="10"></textarea>
                </div>
                <button className='btn btn-primary mx-1 rad' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1  rad ' onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1 rad ' onClick={handleRemoveSpace}>Remove the Space</button>
                <button className='btn btn-primary mx-1  rad' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1  rad' onClick={handleCopyText}>Copy Text</button>

            </div>
            <div className="container my-4" style={{color:props.mode==='light'?'black':"white"}}>
                <h2 >Your Text Summary</h2>
                <p >{text.split(" ").length} words and  {text.length} characters</p>
                <p >{0.08 * text.split(" ").length} Minutes reads</p>
                <h3 >Preview</h3>
               
                <p>{text.length>0 ? text:'Enter something in the textbox to preview it here..'}</p> 
            </div>

            {/* <div className="container ">
                <span class="main my-2"><h2>Binary Converter</h2></span><br />
                <div className='bFunc'>

                    <textarea autofocus class="inputBinary card text-bg-primary mb-3 mx-2" id="inputBinary" rows="10" cols="50" onKeyUp={convertBinary}></textarea>
                    <textarea class="outputBinary card text-bg-info mb-3" id="outputBinary" readonly rows="10" cols="50"></textarea>
                </div>
            </div> */}
        </>
    )
}
