import React from 'react'
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import './header.css'

export default function Header() {
  return (
    <div className="headercontainer">
        <div className="headername">Assignment Task</div>
        <div className="headeremail">
            <div className="emailname">Enter your email</div>
            <a href="">Switch account</a>
            <CloudDoneOutlinedIcon className="cloudicon"/>
            <div className="icondesc">Draft saved</div>
            <br/>
        
        </div>
        <div className="headerdesc">
            The name and photo associated with your
            Google account will be recorded when you upload files 
            and submit this form. Your email is not part of your response
             </div>
        <div className="headerinfo">* indicates required question</div>

      
    </div>
  )
}
