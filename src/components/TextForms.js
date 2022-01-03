import React, { useState } from 'react'

export default function TextForms(props) {
  //convert to upper case
  const handleUpClick = () => {
    //  console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to UpperCase', 'success')
  }

  //convert to lower case
  const handleLoClick = () => {
    // console.log("LowerCase was Clicked"+text);
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to LowerCase', 'success')
  }
  //clear the text area
  const handleClrClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert('text has been removed', 'success')
  }

  //handle the extra spaces
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra Space Has Been Removed', 'success')
  }

  //for copying the text
  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('text has been copied', 'success')
  }

  const handleOnChange = (event) => {
    console.log('on change')
    setText(event.target.value)
  }
  const [text, setText] = useState('')

  return (
    <>
      <div
        className="container"
      // style={{ Color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        {/* text area */}
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            // style={{
            //   backgroundColor: props.mode === "dark" ? "grey" : "white",
            // }}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        {/* all btn */}
        <button
          disabled={text.lenght === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          disabled={text.lenght === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lower Case
        </button>
        <button
          disabled={text.lenght === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.lenght === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.lenght === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClrClick}
        >
          Clear Text
        </button>
      </div>
      {/* Summary */}
      <div className="container my-3">
        <h1>Your Text summary</h1>
        <p>
          {/* one word fixed using filter function  */}
          {
            text.split(' ').filter((element) => {
              return element.length !== 0
            }).length
          }
          words and {text.length}characters
        </p>
        <p>
          An average person can read your text in{' '}
          {0.008 *
            text.split(' ').filter((element) => {
              return element.length !== 0
            }).length}{' '}
          minutes
        </p>
        {/* viewing text  */}
        <h2>Preview</h2>
        <p>{text}</p>
        <hr />
      </div>
    </>
  )
}
