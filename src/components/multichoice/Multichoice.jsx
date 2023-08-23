import React from 'react'
import './multichoice.css'


export default function Multichoice() {
  return (
    <div className="multiwrapper">
    <div className="title">
      <div>Multiple choice </div>
      <div className="asterisk">*</div>
    </div>
   
    <form>
     <div className="multioptions">
        <div className="columns">
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
        </div>
        <br/>
        <div className="row1">
            <div>Row 1</div>

            <div className="row1options">
            <input type="radio" id="option1" value="Option1" name="row1"></input>
            <label for="option1" className="linearlabel"></label><br/>
            <input type="radio" id="option2" value="Option2 "name="row1"></input>
            <label for="option2" className="linearlabel"></label><br/>
            <input type="radio" id="option3" value="Option3" name="row1"></input>
            <label for="option3" className="linearlabel"></label><br/>
            </div>

          
        </div>
        <br/>

        <div className="row2">
            <div>Row 2</div>

            <div className="row2options">
            <input type="radio" id="option1" value="Option1" name="row2"></input>
            <label for="option1" className="linearlabel"></label><br/>
            <input type="radio" id="option2" value="Option2 "name="row2"></input>
            <label for="option2" className="linearlabel"></label><br/>
            <input type="radio" id="option3" value="Option3" name="row2"></input>
            <label for="option3" className="linearlabel"></label><br/>
            </div>

          
        </div>
        <br/>

        <div className="row3">
            <div>Row 3</div>

            <div className="row3options">
            <input type="radio" id="option1" value="Option1" name="row3"></input>
            <label for="option1" className="linearlabel"></label><br/>
            <input type="radio" id="option2" value="Option2 "name="row3"></input>
            <label for="option2" className="linearlabel"></label><br/>
            <input type="radio" id="option3" value="Option3" name="row3"></input>
            <label for="option3" className="linearlabel"></label><br/>
            </div>

          
        </div>
     
      
    
      
     </div>
     

    </form>
    
   
  </div>
  )
}
