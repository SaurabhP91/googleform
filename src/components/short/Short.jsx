import React from 'react'
import './short.css'

export default function Short() {
  return (
    <div className="shortwrapper">
        <div className="title">
         <div>Short Answer </div>
         <div className="asterisk">*</div>

        </div>
        <input type="text" placeholder="Your answer" className="shortanswer"></input>
      
    </div>
  )
}
