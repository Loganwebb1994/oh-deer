import React, { useContext, useEffect } from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "./StandProvider"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({stand, userStandObj}) => {
  const {reserveStand, setAvailability, checkOut, resetAvailability, userStand } = useContext(StandContext)
  const history = useHistory()
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  let reservationObj = {
    userId: currentUserId,
    standId: stand.id,
    note: ""
  }

  useEffect(() => {
    console.log("StandCard: useEffect - usersStands")

  }, [])

  return (
    <section className="stand">
        <h3 className="stand__name">{stand.name} Stand @ {stand.location}</h3>
        <div className="stand__availability">{stand.availability === true? "available": "Occupied"}</div>
        <div className="stand__notes">{userStand.note}</div>
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