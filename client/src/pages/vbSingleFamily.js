// import React from "react"
// import {useParams, Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { getVbTree } from "../util/api"

const VbSingleFamily = ()=>{
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
        setTest(testing.first.birth)
      }catch(err){
        console.error(err)
      }
    };
    getTreeInfo()
  })

  return(
    <div>
        <p>{test}</p>
    </div>
)
  }
export default VbSingleFamily;