import React from "react"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"

import "./home.css"
import Image from 'react-bootstrap/Image'

const Home = () => {

    return (
        <div className="homePictures">
            <Link to="/vb/family/@I6862845710@">
                <Image className="photos" src="../../photos/erwinVonBehren.png" className="fluclassName" />
            </Link>
            <Link to="/vb/family/@I_1884986966@">
                <Image className="photos" src="../../photos/georgeTraxelFrame.png" className="fluclassName" />
            </Link>
            <Link to="/mic/family/@P1@">
                <Image className="photos" src="../../photos/owenAmore.png" className="fluclassName" />
            </Link>
            <Link to="/mic/family/@P220@">
                <Image className="photos" src="../../photos/delHansen.png" className="fluclassName" />
            </Link>
            <Link to="/vb/family/@I6862850024@">
                <Image className="photos" src="../../photos/henryVonBehren.png" className="fluclassName" />
            </Link>
            <Link to="/vb/family/@I6135340449@">No photo found William Traxel</Link>
            <Link to="/mic/family/@P3@">
                <Image className="photos" src="../../photos/timothyAmore.png" className="fluclassName" />
            </Link>
            <Link to="/mic/family/@P221@">
                <Image className="photos" src="../../photos/adolphHansen.png" className="fluclassName" />
            </Link>
            <Link to="/vb/family/@I6862854348@">
                <Image className="photos" src="../../photos/henryPehle.png" className="fluclassName" />
            </Link>
            <Link to="/vb/family/@I_1884986963@">
                <Image className="photos" src="../../photos/jakebBujnakFrame.png" className="fluclassName" />
            </Link>
            <Link to="/mic/family/@P120@">
                <Image className="photos" src="../../photos/emilRoeder.png" className="fluclassName" />
            </Link>
            <Link to="/mic/family/@P120@">william Johnson</Link>
            <Link to="/vb/family/@I6862850024@">Fritz Rohlfing</Link>
            <Link to="/vb/family/@I6862850024@">No person found</Link>
            <Link to="/mic/family/@P120@">Moses Amore</Link>
            <Link to="/mic/family/@P120@">Nils Hansen</Link>
            <Link to="/vb/family/@I6862850024@">Henry Witthaus</Link>
            <Link to="/vb/family/@I6862850024@">No person found</Link>
            <Link to="/mic/family/@P120@">Daniel Lanam</Link>
            <Link to="/mic/family/@P120@">No person found</Link>


        </div>
    )
}
export default Home;