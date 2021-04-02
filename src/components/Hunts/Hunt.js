import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "../stands/StandProvider"
import "./Hunt.css"


export const Hunt = ({obj}) => {
  const history = useHistory()

  const {deleteHunt} = useContext(StandContext)
  return(
    <section className="hunt">
      <h1 className="date">{new Date(obj.timestamp).toLocaleString()}</h1>
      <h1 className="standName">{obj.stand.name} Stand <br></br> at <br></br> {obj.stand.location}</h1>
      <h4 className="note">{obj.note}</h4>
      <button className="huntButton" onClick={() => {history.push(`/stands/${obj.id}`)}}>Notes</button>
      <button className="huntButton" onClick={() => {deleteHunt(obj.id)}}>Delete Hunt</button>
    </section>
  )
}