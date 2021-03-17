import React from "react"
import "./Stand.css"
import { Route, useHistory } from "react-router-dom"


//after you take out the hard coded date remember to pass in {props} to Stand()
export const StandCard = ({stand}) => {
  const history = useHistory()
  return (
    <section className="stand">
        <h3 className="stand__name">{stand.name} Stand @ {stand.location}</h3>
        <div className="stand__availability">Available</div>
        <div className="stand__notes">
          The straps for this stand are dry rotten and need to be replaced.
          </div>
          <button className="stand__notes__delete">X</button>
          <button className="stand__notes__edit">Edit Note</button>
        <div className="buttonContainer">
          <button className="stand__reserve">Reserve</button>
          <button className="stand__delete">Delete</button>
          <button className="stand__addNote" onClick={() =>  {history.push("/events/create")}}>Make Note</button>
        </div>
    </section>
)
}