import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import "./Stand.css"

export const StandList = () => {

  const { stands, getStands, standNotes, getStandNotes, userStand } = useContext(StandContext)


  useEffect(() => {
    getStandNotes()
    .then(getStands)

  }, [])


  
  
  return (
    <div className="standList">
      {
        stands.map(stand => { 
          const standNote = standNotes.filter(note => note.standId === stand.id)
          return <StandCard key={stand.id} stand={stand} relationship={userStand} />
        })
      }
    </div>
  )
}