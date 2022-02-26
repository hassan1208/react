import React,{useState} from 'react'



export default function TextForm(props) {
    const [text, setText]= useState("Enter Text Here");
    //   text ="new txt"; //wrong way to update
    //   setText("new Text"); //correct way to create
    const handleUpclick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  
    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
        </div>
        </>
        
  )
}
