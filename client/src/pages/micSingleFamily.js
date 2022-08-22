// import React from "React"
import {useParams} from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { getMicNuclear } from "../util/api"
import "./singleFamily.css"


import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Image from 'react-bootstrap/Image'


const MicSingleFamily = () => {
    //grabs the Id from the parameter
    let {Id} = useParams()

    //set up for the dynamic data on the page

    //general data
    const [familyName, setFamilyName] = useState("");
    const [children, setChildren] = useState([])
    const[marriage, setMarriage] = useState([])
    const[photo, setPhoto] = useState("")
    const[description, setDescription] = useState()

    //data on the husband
    const [husband, setHusband] = useState("")
    const [husbandBirth, setHusbandBirth] = useState("")
    const [husbandDeath, setHusbandDeath] = useState("")
    const [husbandBirthPlace, setHusbandBirthPlace] = useState("unknown")
    const [husbandBurial, setHusbandBurial] = useState("unknown")
    const [husbandMother, setHusbandMother] = useState("")
    const [husbandFather, setHusbandFather] = useState("")

    //data on the wife
    const [wife, setWife] = useState("")
    const [wifeBirth, setWifeBirth] = useState("")
    const [wifeDeath, setWifeDeath] = useState("")
    const [wifeBirthPlace, setWifeBirthPlace] = useState("unknown")
    const [wifeBurial, setWifeBurial] = useState("unknown")
    const [wifeMother, setWifeMother] = useState("")
    const [wifeFather, setWifeFather] = useState("")


    useEffect(() => {
        
        const getTreeInfo = async () => {
            try {
                const res = await getMicNuclear(Id)
                if (!res.ok) {
                    throw new Error("error")
                }
                const family = await res.json();

                setFamilyName(family.husband.Fullname.Surname)
                setChildren(family.children)
                if(family.children === []){
                    setChildren("None")
                }
                setMarriage(family.marriageDate)
                if(family.marriageDate === ""){
                    setMarriage("unknown")
                }
                const famPhoto = await family.husband.photo
                setPhoto(famPhoto)

                setDescription(family.husband.description)

                setHusband(family.husbandName)
                setHusbandBirth(family.husband.Birth.birthdate)
                setHusbandBirthPlace(family.husband.Birth.birthplace)
                setHusbandDeath(family.husband.death.date)
                setHusbandBurial(family.husband.burial.burial)
                setHusbandMother(family.husbandParents.motherName)
                setHusbandFather(family.husbandParents.fatherName)
    
                setWife(family.wifeName)
                setWifeBirth(family.wife.Birth.birthdate)
                setWifeBirthPlace(family.wife.Birth.birthplace)
                setWifeDeath(family.wife.death.date)
                setWifeBurial(family.wife.burial.burial)
                setWifeMother(family.wifeParents.motherName)
                setWifeFather(family.wifeParents.fatherName)


            } catch (err) {
                console.error(err)
            }
        };
        getTreeInfo()
    })

    return (
        <div className="single-family">
            <main className="famName-famPhoto">
                <div id="famName-box">
                    <h1 id="famName">The {familyName} Family</h1>
                </div>
                <Image id="famPhoto" src={photo} className="fluid"/>
            </main>
            <section className="husband-wife-card">
            <Card >
                <Card.Body>
                    <Card.Title><h2>{husband}</h2></Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><p>{husbandBirth} - {husbandDeath}</p></ListGroup.Item>
                        <ListGroup.Item><p>Place of Birth:</p><p>{husbandBirthPlace}</p></ListGroup.Item>
                        <ListGroup.Item><p>Mother:</p><p>{husbandMother}</p></ListGroup.Item>
                        <ListGroup.Item><p>Father:</p><p>{husbandFather}</p></ListGroup.Item>
                        <ListGroup.Item><p>Buried at:</p><p>{husbandBurial}</p></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title><h2>{wife}</h2></Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><p>{wifeBirth} - {wifeDeath}</p></ListGroup.Item>
                        <ListGroup.Item><p>Place of Birth:</p><p>{wifeBirthPlace}</p></ListGroup.Item>
                        <ListGroup.Item><p>Mother:</p><p>{wifeMother}</p></ListGroup.Item>
                        <ListGroup.Item><p>Father:</p><p>{wifeFather}</p></ListGroup.Item>
                        <ListGroup.Item><p>Buried at:</p><p>{wifeBurial}</p></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            </section>
            <Card className="description">
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroupItem><h5>Married on:</h5><p>{marriage}</p></ListGroupItem>
                            <ListGroupItem><h5>Children:</h5>{children.map((child)=>{
                            return(<p>{child}</p>)})} </ListGroupItem>
                         
                            <ListGroupItem><h5>About {husband} and {wife}:</h5></ListGroupItem>
                        <ListGroupItem>{description}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}
export default MicSingleFamily;