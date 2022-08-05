import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home"
import VbTree from "./pages/VbTree"
import VbSingleFamily from "./pages/VbSingleFamily"
import MicTree from "./pages/MicTree"
import MicSingleFamily from "./pages/MicSingleFamily"

// import { useParams, Link } from 'react-router-dom';


/*-----------------testing connection--------------------*/
// import {getVbTree} from "./util/api"

function App() {
//   const [test, setTest] = useState("testing");
//   useEffect(()=>{
//     const getTreeInfo = async ()=>{
//       try{
//         const res = await getVbTree("@I_1884986968@")
//         if(!res.ok){
//           throw new Error("error")
//         }
//         const testing = await res.json();
//         console.log(testing)
//         setTest(testing.first.birth)
//       }catch(err){
//         console.error(err)
//       }
//     };
//     getTreeInfo()
//   })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vb/tree/:Id" element={<VbTree />}/>
          <Route path="/vb/family/:Id" element={<VbSingleFamily />}/>
          <Route path="/mic/tree/:Id" element={<MicTree />}/>
          <Route path="/mic/family/:Id" element={<MicSingleFamily />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
