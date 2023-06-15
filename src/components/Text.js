import React from 'react'
import { useState } from 'react'
import { Preview } from './Preview';


export const Text = () => {
    function isTextBoxEmpty() {
        if (text === "") {
            alert("please enter some text first")
        }
    }
    function textFunction(event) {
        setText(event.target.value)
    }
    function handleUpperCase() {
        isTextBoxEmpty()
        setText(text.toUpperCase())

    }
    function handleLowerCase() {
        isTextBoxEmpty()
        setText(text.toLowerCase())
    }
    function handleExtraSpace() {
        isTextBoxEmpty()
        setText(text.trim())
    }
    function handleFormatting() {
        isTextBoxEmpty()
        // Remove leading and trailing white spaces
        let trimmedString = text.trim();

        // Remove all line breaks and excess white spaces
        let normalizedString = trimmedString.replace(/\s+/g, ' ');
        setText(normalizedString)
    }
    function handleClear() {
        setText("")
    }
    function handleCopy() {
        navigator.clipboard.writeText(text);
    }
    const [text, setText] = useState("")

    return (
        <>
            <div className="container">
                <div className=' form-floating m-3'>
                    <textarea className="form-control" value={text} onChange={(event) => { textFunction(event) }} placeholder="Enter your text here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                    <label htmlFor="floatingTextarea2">Enter your text here</label>
                </div>
                <div className='container-fluid d-flex flex-wrap justify-content-center align-items-center'>

                    <button className='btn btn-success m-2' onClick={handleUpperCase} >To UpperCase</button>
                    <button className='btn btn-secondary m-2' onClick={handleLowerCase}>To LowerCase</button>
                    <button className='btn btn-danger m-2' onClick={handleExtraSpace}>Remove Extra Space</button>
                    <button className='btn btn-warning m-2' onClick={handleFormatting}>Remove Formatting</button>
                    <button className='btn btn-info m-2' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-warning m-2' onClick={handleClear}>Clear Text</button>

                </div>

            </div>
            <Preview previewText={text} />
        </>

    )
}
