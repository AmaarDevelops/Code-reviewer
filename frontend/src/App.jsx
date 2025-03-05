import React from 'react'
import { useState,useEffect } from 'react'
import Editor from "react-simple-code-editor"
import axios from 'axios'
import Markdown from "react-markdown"
import "prismjs/themes/prism-tomorrow.css";

import prism from "prismjs"

const App = () => {

  const [code,setCode]=useState(`function sum(){
  return 1+1
}`)
const [review,Setreview]=useState(``)



  useEffect(()=>{
    prism.highlightAll()
  })

 async  function ReviewCode(){
   const response = await axios.post('http://localhost:3000/ai/get-review',{code})
   console.log(response.data)
   Setreview(response.data)
 }

  return (
   <>
   <main>
    <div className="left">
      <div className="code">
       <Editor 
       value={code}
       onValueChange={code => setCode(code)}
       highlight={code => prism.highlight(code,prism.languages.javascript,"javascript")}
       padding={10}
       style={{
        fontFamily:"Fira code",
        fontSize:16,
        color:"white",
        border:"1px solid #ddd",
        borderRadius:"5px",
        overflow:"scroll",
        height:"100%",
        width:"100%"
       }}
       />
      </div>
      <div className="review" onClick={ReviewCode}>Review</div>
    </div>
    <div className='right'><Markdown>{review}</Markdown></div>
   </main>
   </>
  )
}
function sum(){
  return 1+1
}

export default App
