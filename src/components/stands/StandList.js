import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import "./Stand.css"

export const StandList = () => {

  const { stands, getStands, standNotes, getStandNotes, userStand, getUsers } = useContext(StandContext)

  useEffect(() => {
    getUsers()
    }, [])

  useEffect(() => {
    getStandNotes()
    .then(getStands())

  }, [])


  
  
  return (
    <div className="standList">
      {
        stands.map(stand => { 
          return <StandCard key={stand.id} stand={stand} relationship={userStand} />
        })
      }
    </div>
  )
}