import React, { useContext, useEffect } from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "./StandProvider"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({stand, note}) => {
  const {reserveStand, setAvailability} = useContext(StandContext)
  const history = useHistory()
  const currentUserId = sessionStorage.getItem("ohDeer_user")
  let reservationObj = {
    userId: currentUserId,
    standId: stand.id,
    note: ""
  }

  useEffect(() => {
    console.log("StandCard: useEffect - usersStands")
    getStandNotes()
    .then(getStands)

  }, [])

  return (
    <section className="stand">
        <h3 className="stand__name">{stand.name} Stand @ {stand.location}</h3>
        <div className="stand__availability">{stand.availability}</div>
        <div className="stand__notes">{note?.content}</div>
        <div className="buttonContainer">
          <button className="stand__notes__edit">Edit Note</button>
          <button className="stand__notes__delete">Delete Note</button>
        </div>
        <div className="buttonContainer">
          <button className="stand__reserve" onClick={() =>{if (stand.availability === true){reserveStand(reservationObj).then(setAvailability(stand.id))}}}>Reserve</button>
          <button className="stand__delete">Delete</button>
          <button className="stand__addNote" onClick={() =>  {history.push("/create-note")}}>Make Note</button>
        </div>
    </section>
)
}