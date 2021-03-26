import React, { useContext, useEffect, useState } from "react"
import { Route, useHistory } from "react-router-dom"
import { StandContext } from "../stands/StandProvider"
import {Hunt} from "./Hunt"


export const HuntList = () => {
  const { getHunts, hunts } = useContext(StandContext)
  const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
  useEffect(() => {
    getHunts()
  }, [])
  

  return (
  <>
    { 
      hunts.filter(hunt => hunt.userId === currentUserId ).map( hunt =><Hunt key={hunt.id} obj={hunt}/>)
    }
  </>
  )

}