import React, { useContext, useEffect, useState } from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "./StandProvider"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({ stand, relationships }) => {

  const [george, setGeorge] = useState(false)
  const { reserveStand, setAvailability, resetAvailability, stands, users, getUsers, addNote, userStandId, getStands } = useContext(StandContext)
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  const currentUser = users.find(user => user.id === currentUserId)
  const history = useHistory()

  useEffect(() => {
    getUsers()

  }, [])
  useEffect(() =>{
    relationships.map(relationship => {
      if (stand.availability === false && currentUserId === relationship.userId){
        setGeorge(true)
      }
      
    })
  }, [stands])
  
  const handleReserve = () => {
    if (stand.availability === true) { 
      const reservationObj = {
        userId: currentUserId,
        standId: stand.id,
        note: "",
        timestamp: Date.now()
      }
      reserveStand(reservationObj)
      .then(() => setAvailability(stand.id)) 
    }
  }




  return (
    <section className="stand" id={stand.id}>
      <h3 className="stand__name">{stand.name} Stand<br></br> at <br></br>{stand.location}</h3>
      <h2 className="stand__availability">{stand.availability === true ? "available" : "occupied"}</h2>
      <div className="buttonContainer">
        {stand.availability === true ? (<button className="stand__reserve" onClick={handleReserve}>Check In</button>) : ""}
        {stand.availability === false && george === true ? (<button className="stand__checkOut" onClick={() => { resetAvailability(stand.id) }}>Check Out</button>) : ""}
      </div>
    </section>
  )
}