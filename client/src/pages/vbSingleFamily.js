// import React from "react"
// import {useParams, Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { getVbNuclear } from "../util/api"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';

const VbSingleFamily = () => {
    const [familyName, setFamilyName] = useState("");

    const [husband, setHusband] = useState("")
    const [husbandBirth, setHusbandBirth] = useState("")
    const [husbandDeath, setHusbandDeath] = useState("")
    const [husbandBirthPlace, setHusbandBirthPlace] = useState("unknown")
    const [husbandBurial, setHusbandBurial] = useState("unknown")
    const [husbandMother, setHusbandMother] = useState("")
    const [husbandFather, setHusbandFather] = useState("")

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
                const res = await getVbNuclear("@I_1884986966@")
                if (!res.ok) {
                    throw new Error("error")
                }
                const family = await res.json();
                setFamilyName(family.husband.Fullname.Surname)
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
        <div>
            <main>
                <h1>The {familyName} Family</h1>
                {/* Image found here */}
            </main>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{husband}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{husbandBirth} - {husbandDeath}</ListGroup.Item>
                        <ListGroup.Item>Place of Birth: {husbandBirthPlace}</ListGroup.Item>
                        <ListGroup.Item>Mother: {husbandMother}</ListGroup.Item>
                        <ListGroup.Item>Father: {husbandFather}</ListGroup.Item>
                        <ListGroup.Item>Buried at: {husbandBurial}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{wife}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{wifeBirth} - {wifeDeath}</ListGroup.Item>
                        <ListGroup.Item>Place of Birth: {wifeBirthPlace}</ListGroup.Item>
                        <ListGroup.Item>Mother: {wifeMother}</ListGroup.Item>
                        <ListGroup.Item>Father: {wifeFather}</ListGroup.Item>
                        <ListGroup.Item>Buried at: {wifeBurial}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

        </div>
    )
}
export default VbSingleFamily;