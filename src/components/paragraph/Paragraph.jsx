import React from 'react'
import './para.css'

export default function Paragraph() {
  return (
    <div className="parawrapper">
    <div className="paratitle">
     <div>Paragraph </div>
     <div className="asterisk">*</div>

    </div>
    <form>
    <textarea placeholder="Your answer" className="paraanswer"></textarea>
        
    </form>
    
  
</div>
  )
}
