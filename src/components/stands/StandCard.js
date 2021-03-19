import React, { useContext, useEffect } from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "./StandProvider"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({stand, relationship}) => {
  useEffect(() => {
    getUsers()
    }, [])
    
  const {reserveStand, setAvailability, checkOut, resetAvailability, userStand, users, getUsers } = useContext(StandContext)
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  const currentUser = users.find(user => user.id === currentUserId)
  const history = useHistory()
  let reservationObj = {
    userId: currentUserId,
    standId: stand.id,
    note: ""
  }


  return (
    <section className="stand">
        <h3 className="stand__name">{stand.name} Stand @ {stand.location}</h3>
        <div className="stand__availability">{stand.availability === true? "available": currentUser?.name}</div>
        <div className="stand__notes">{relationship.note}</div>
        <div className="buttonContainer">
          <button className="stand__notes__edit">Edit Note</button>
          <button className="stand__notes__delete">Delete Note</button>
        </div>
        <div className="buttonContainer">
          <button className="stand__reserve" onClick={() =>{if (stand.availability === true){reserveStand(reservationObj).then(setAvailability(stand.id))}}}>Check In</button>
          {stand.availability === false? (<button id = "" className="stand__checkOut" onClick={() =>{checkOut(userStand.id).then(resetAvailability(stand.id))}}>Check Out</button>): ""}
          <button className="stand__delete">Delete</button>
          <button className="stand__addNote" onClick={() =>  {history.push("/create-note")}}>Make Note</button>
        </div>
    </section>
)
}