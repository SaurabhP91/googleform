import React from 'react'
import './dropdown.css'

export default function Dropdown() {
  return (
    
    <div className="dropdownwrapper">
    <div className="title">
     <div>Dropdown </div>
     <div className="asterisk">*</div>

    </div>
    <form>
    <div class="dropdown">
    <button class="dropbtn">Choose</button>
    <div class="dropdown-content">
        <a href="#">Option 1</a>
        <a href="#">Option 2</a>
        <a href="#">Option 3</a>
     </div>
    </div>

    </form>

  
</div>
  )
}
