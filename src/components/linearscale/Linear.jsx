import React from 'react'
import './linear.css'



export default function Linear() {
  return (
    <div className="linearwrapper">
    <div className="lineartitle">
      <div>Linear scale </div>
      <div className="asterisk">*</div>
    </div>
   
    <form>
     <div className="linearoptions">
     <div>Worst</div>
      <input type="radio" id="option1" value="Option1" name="linearoptions"></input>
      <label for="option1" className="linearlabel">1</label><br/>
      <input type="radio" id="option2" value="Option2 "name="linearoptions"></input>
      <label for="option2" className="linearlabel">2</label><br/>
      <input type="radio" id="option3" value="Option3" name="linearoptions"></input>
      <label for="option3" className="linearlabel">3</label><br/>
      <input type="radio" id="option4" value="Option4" name="linearoptions"></input>
      <label for="option3" className="linearlabel">4</label><br/>
      <input type="radio" id="option5" value="Option5" name="linearoptions"></input>
      <label for="option3" className="linearlabel">5</label><br/>
      <div>Best</div>
     </div>
     

    </form>
    
   
  </div>
  )
}
