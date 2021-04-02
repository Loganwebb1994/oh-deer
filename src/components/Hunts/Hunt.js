import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "../stands/StandProvider"
import "./Hunt.css"


export const Hunt = ({obj}) => {
  const history = useHistory()

  const {deleteHunt} = useContext(StandContext)
  return(
    <section className="hunt">
      <h3 className="date">{new Date(obj.timestamp).toLocaleString()}</h3>
      <h3 className="standName">{obj.stand.name} @ {obj.stand.location}</h3>
      <h4 className="note">{obj.note}</h4>
      <button className="huntButton" onClick={() => {history.push(`/stands/${obj.id}`)}}>Notes</button>
      <button className="huntButton" onClick={() => {deleteHunt(obj.id)}}>Delete Hunt</button>
    </section>
  )
}