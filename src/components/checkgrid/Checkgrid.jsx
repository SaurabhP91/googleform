import React from 'react'
import './checkgrid.css'


export default function Checkgrid() {
  return (
    <div className="checkgridwrapper">
    <div className="title">
      <div>Tick box grid </div>
      <div className="asterisk">*</div>
    </div>
   
    <form>
     <div className="checkgridoptions">
        <div className="columns">
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
        </div>
        <br/>
        <div className="row1">
            <div>Row 1</div>

            <div className="row1options">
            <input type="checkbox" id="option1" value="Option1" name="row1"></input>
            <label for="option1" className="linearlabel"></label><br/>
            <input type="checkbox" id="option2" value="Option2 "name="row1"></input>
            <label for="option2" className="linearlabel"></label><br/>
            <input type="checkbox" id="option3" value="Option3" name="row1"></input>
            <label for="option3" className="linearlabel"></label><br/>
            </div>

          
        </div>
        <br/>

        <div className="row2">
            <div>Row 2</div>

            <div className="row2options">
            <input type="checkbox" id="option1" value="Option1" name="row2"></input>
            <label for="option1" className="linearlabel"></label><br/>
            <input type="checkbox" id="option2" value="Option2 "name="row2"></input>
            <label for="option2" className="linearlabel"></label><br/>
            <input type="checkbox" id="option3" value="Option3" name="row2"></input>
            <label for="option3" className="linearlabel"></label><br/>
            </div>

          
        </div>
        <br/>

        <div className="row3">
            <div>Row 3</div>

            <div className="row3options">
            <input type="checkbox" id="option1" value="Option1" name="row3"></input>
            <label for="option1" className="linearlabel"></label><br/>
            <input type="checkbox" id="option2" value="Option2 "name="row3"></input>
            <label for="option2" className="linearlabel"></label><br/>
            <input type="checkbox" id="option3" value="Option3" name="row3"></input>
            <label for="option3" className="linearlabel"></label><br/>
            </div>

          
        </div>
     
      
    
      
     </div>
     

    </form>
    
   
  </div>
  )
}
