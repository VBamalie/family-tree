// import React from "react"
import {Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom"

import "./home.css"
import Image from 'react-bootstrap/Image'

const Home = ()=>{
    
    return(
    <div className="homePictures">
        <Link to="/vb/family/@I_1884986966@">
            <Image className="photos" src="../../photos/georgeTraxelFrame.png" className="fluclassName"/>
        </Link>
        <Link to="/vb/family/@I6862845710@">
            <Image className="photos" src="../../photos/erwinVonBehren.png" className="fluclassName"/>
        </Link>
        <Link to="/vb/family/@I6862850024@">
            <Image className="photos" src="../../photos/henryVonBehren.png" className="fluclassName"/>
        </Link>
        <Link to="/vb/family/@I_1884986963@">
            <Image className="photos" src="../../photos/jakebBujnakFrame.png" className="fluclassName"/>
        </Link>
        <Link to="/vb/family/@I6862854348@">
            <Image className="photos" src="../../photos/henryPehle.png" className="fluclassName"/>
        </Link>
         <Image className="photos" src="../../photos/adolphHansen.png" className="fluclassName"/>
         <Image className="photos" src="../../photos/delHansen.png" className="fluclassName"/>
         <Image className="photos" src="../../photos/emilRoeder.png" className="fluclassName"/>
         <Image className="photos" src="../../photos/owenAmore.png" className="fluclassName"/>
         <Image className="photos" src="../../photos/timothyAmore.png" className="fluclassName"/>
    </div>
)
}
export default Home;