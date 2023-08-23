
import React from "react";
import Header from "./components/header/Header"
import Mcq from "./components/MCQ/Mcq"
import Checkbox from "./components/checkbox/Checkbox"
import Short from "./components/short/Short"
import Paragraph from "./components/paragraph/Paragraph"
import Dropdown from "./components/dropdown/Dropdown"
import Fileupload from "./components/fileupload/Fileupload"
import Linear from "./components/linearscale/Linear"
import Multichoice from "./components/multichoice/Multichoice"
import Checkgrid from "./components/checkgrid/Checkgrid"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <br/>
      <Mcq/>
      <br/>
      <Checkbox/>
      <br/>
      <Short/>
      <br/>
      <Paragraph/>
      <br/>
      <Dropdown/>
      <br/>
      <Fileupload/>
      <br/>
      <Linear/>
      <br/>
      <Multichoice/>
      <br/>
      <Checkgrid/>
      <br/>
      <Footer/>
      

    </>
     

    
  );
}

export default App;
