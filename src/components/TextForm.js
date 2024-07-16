import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter a text detail's");
  


  const handleClick = () => {
    console.log("Button clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  };

  const handleClicki = () => {
    console.log("Button clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("Text changed");
  };

  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          id="my-test" 
          rows="8" 
          onChange={handleOnChange} 
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleClick}> Upper Submit</button>
      <button className="btn btn-primary" onClick={handleClicki}>Lower Submit</button>
    </div>

    <div className='container my-5'>
      <h1>This is the Summary</h1>
      <p>{text.split(" ").length} words {text.length} charcters</p>
      <h4>Minutes to read the Words</h4>
      <p>{0.008 * text.split(" ").length} minutes to read this words</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
  