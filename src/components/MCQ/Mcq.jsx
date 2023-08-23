import React from 'react'
import './mcq.css'

export default function Mcq() {
  return (
    <div className="mcqwrapper">
      <div className="title">
        <div>MCQ </div>
        <div className="asterisk">*</div>
      </div>
      <form>
       <div className="options">
        <input type="radio" id="option1" value="Option1" name="options"></input>
        <label for="option1">Option 1</label><br/>
        <input type="radio" id="option2" value="Option2 "name="options"></input>
        <label for="option2">Option 2</label><br/>
        <input type="radio" id="option3" value="Option3" name="options"></input>
        <label for="option3">Option 3</label><br/>

       </div>

      </form>
     
    </div>
    
  )
}
