import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "../stands/StandProvider"


export const Hunt = ({obj}) => {
  console.log(obj)
  const history = useHistory()

  return(
    <section className="huntCard">
      <div className="date">{new Date(obj.timestamp).toLocaleString()}</div>
      <div className="standName">{obj.stand.name} @ {obj.stand.location}</div>
      <div className="note">{obj.note}</div>
      <button onClick={() => {history.push(`/stands/${obj.id}`)}}>Edit Note</button>
    </section>
  )
}