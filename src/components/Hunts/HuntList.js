import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "../stands/StandProvider"
import {Hunt} from "./Hunt"
import "./Hunt.css"
import "../../App.css"


export const HuntList = () => {
  const { getHunts, hunts } = useContext(StandContext)
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  const sortedHunts = hunts.sort(
    (currentHunt, nextHunt) => (nextHunt.timestamp) - (currentHunt.timestamp)
  )

  useEffect(() => {
    getHunts()

  }, [])


  return (
  <>
    <section className="huntList">
    { 
      sortedHunts.filter(hunt => hunt.userId === currentUserId ).map( hunt =><Hunt key={hunt.id} obj={hunt}/>)}
    </section>
  </>
  )

}