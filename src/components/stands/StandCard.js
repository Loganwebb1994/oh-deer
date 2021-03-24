import React, { useContext, useEffect } from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "./StandProvider"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({ stand, relationships }) => {


  const { reserveStand, setAvailability, resetAvailability, userStand, users, getUsers } = useContext(StandContext)
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  const currentUser = users.find(user => user.id === currentUserId)
  const history = useHistory()

  useEffect(() => {
    getUsers()

  }, [])


  const handleReserve = () => {
    console.log("hello")
    if (stand.availability === true) { 
      const reservationObj = {
        userId: currentUserId,
        standId: stand.id,
        note: ""
      }
      reserveStand(reservationObj)
      .then(() => setAvailability(stand.id)) 
    }
  }

  const renderNoteButtons = () => {
    return(
      <>
      <button className="stand__notes__edit" id= {stand.id}>Edit Notes</button>
      <button className="stand__notes__delete">Delete Note</button>
      <button className="stand__addNote" onClick={() => { history.push(`/stands/${stand.id}`) }}>Make Note</button>
      </>
    )

 
  }
  
  return (
    <section className="stand">
      <h3 className="stand__name">{stand.name} Stand @ {stand.location}</h3>
      <div className="stand__availability">{stand.availability === true ? "available" : currentUser?.name}</div>
      <div className="stand__notes">{relationships.map(relationship => relationship.note)}</div>
      <div className="buttonContainer">
        {stand.availability === false ? renderNoteButtons() : ""}
      </div>
        {/* <button className="stand__delete">Delete</button> */}
      <div className="buttonContainer">
        {stand.availability === true ? (<button className="stand__reserve" onClick={handleReserve}>Check In</button>) : ""}
        {stand.availability === false ? (<button className="stand__checkOut" onClick={() => { resetAvailability(stand.id) }}>Check Out</button>) : ""}
      </div>
    </section>
  )
}