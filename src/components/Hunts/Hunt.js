import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "../stands/StandProvider"
import "./Hunt.css"
import "../../App.css"

//html representation of one hunt
export const Hunt = ({obj}) => {
  const history = useHistory()

  const {deleteHunt} = useContext(StandContext)
  return(
    <section className="hunt">
      <h1 className="date" >{new Date(obj.timestamp).toLocaleString()} </h1>
      <h1 className="standName"><div>{obj.stand.name} Stand </div><div>at</div><div>{obj.stand.location}</div> </h1>
      <h4 className="note"><span className="bgNote">{obj.note}</span></h4>
      <div className="hButCont">
        <button className="huntButton" onClick={() => {history.push(`/stands/${obj.id}`)}}>Notes</button>
        <button className="huntButton" onClick={() => {deleteHunt(obj.id)}}>Delete</button>
      </div>
    </section>

  )
}