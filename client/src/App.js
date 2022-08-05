// import React from "react"
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useParams, Link } from 'react-router-dom';
import {getVbTree} from "./util/api"

function App() {
  const [test, setTest] = useState("testing");
  useEffect(()=>{
    const getTreeInfo = async ()=>{
      try{
        const res = await getVbTree("@I_1884986968@")
        if(!res.ok){
          throw new Error("error")
        }
        const testing = await res.json();
        console.log(testing)
        setTest({testing})
      }catch(err){
        console.error(err)
      }
    };
    getTreeInfo()
  })
  return (
    <div className="App">
      <p>{test}</p>
    </div>
  );
}

export default App;
