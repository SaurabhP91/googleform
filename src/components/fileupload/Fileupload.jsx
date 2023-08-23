import React from 'react'
import './fileupload.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function Fileupload() {
  return (
    <div className="filewrapper">
        <div className="filetitle">
         <div>File upload </div>
         <div className="asterisk">*</div>

        </div>
        <div className="buttonwrap">
            <FileUploadOutlinedIcon id="uploadicon"/>
         <input type="file" id="upload"></input>
         <label for="upload" id="uploadlabel">Add file</label>
        </div>
     
    </div>
  )
}
