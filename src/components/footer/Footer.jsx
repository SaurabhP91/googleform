import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footerwrapper">
        <div className="left">
            <input type="submit" value="Submit"></input>
        </div>

        <div className="center">
            <progress id="pages" value="100" max="100"></progress>
        </div>
      
    </div>
  )
}
