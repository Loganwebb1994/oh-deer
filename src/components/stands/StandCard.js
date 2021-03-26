import React, { useContext, useEffect, useState } from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "./StandProvider"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({ stand, relationships }) => {

  const [george, setGeorge] = useState(false)
  const { reserveStand, setAvailability, resetAvailability, userStand, users, getUsers, addNote, userStandId } = useContext(StandContext)
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  const currentUser = users.find(user => user.id === currentUserId)
  const history = useHistory()

  useEffect(() => {
    getUsers()

  }, [])

  const handleReserve = () => {
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
      {console.log(currentUserId, "!!")}
      <button className="stand__notes__delete" onClick={() => addNote({note:""}, userStandId )}>Delete Note</button>
      <button className="stand__addNote" onClick={() => { history.push(`/stands/${stand.id}`) }}>Notes</button>
      </>
    )

  }

  useEffect(() =>{
    relationships.map(relationship => {
      if (stand.availability === false && currentUserId === relationship.userId){
        setGeorge(true)
      }
      
    })
  }, [])

  return (
    <section className="stand" id={stand.id}>
      <h3 className="stand__name">{stand.name} Stand @ {stand.location}</h3>
      <div className="stand__availability">{stand.availability === true ? "available" : "occupied"}</div>
      <div className="stand__notes">{relationships.map(relationship => <div>{relationship.note}</div>)}</div>
      <div className="buttonContainer">
        {stand.availability === false && george === true ? renderNoteButtons() : ""}
      </div>
      <div className="buttonContainer">
        {stand.availability === true ? (<button className="stand__reserve" onClick={handleReserve}>Check In</button>) : ""}
        {stand.availability === false && george === true ? (<button className="stand__checkOut" onClick={() => { resetAvailability(stand.id) }}>Check Out</button>) : ""}
      </div>
    </section>
  )
}