import React from 'react'
import './checkbox.css'

export default function Checkbox() {
  return (
    <div className="checkboxwrapper">
        <div className="title">
            <div>Checkbox</div>
            <div className="asterisk">*</div>

        </div>
        
      <form>
        <input type="checkbox" id="check1" value="Option 1" name="check"></input>
        <label for="check1">Option 1</label><br/>
        <input type="checkbox" id="check2" value="Option 2" name="check"></input>
        <label for="check2">Option 2</label><br/>
        <input type="checkbox" id="check3" value="Option 3" name="check"></input>
        <label for="check3">Option 3</label><br/>
      </form>
    </div>
  )
}
