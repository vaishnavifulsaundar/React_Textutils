import React,{useState} from 'react'


export default function Textform(props) {
  
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowClick=()=>{
        console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
    }

   const handleBoldClick=()=>{
    // let newText = <strong>{text}</strong>;
    const newText = `<strong>${text}</strong>`;
    setText(newText)
   }

    const handleClearClick=()=>{
        const newText =''
        setText(newText)
    }

const handleOnChange =(event)=>{
    console.log("On change")
    setText(event.target.value)
}

const[text,setText] = useState('');

    return (
   <>
   <div className="container">
   <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>&nbsp;
<div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Uppercase</button>

{/* <button className="btn btn-primary " onClick={handleBoldClick}>Convert to BoldCase</button> */}
&nbsp;&nbsp;
<button className="btn btn-primary " onClick={handleClearClick}> Clear text</button>



</div>
</div>
</div>
<div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 *text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text}</p>
{/* <div dangerouslySetInnerHTML={{ __html: text }} /> */}

</div>
   </>
  )
}
