import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import "./Stand.css"

export const StandList = () => {

  const { stands, getStands, standNotes, getStandNotes } = useContext(StandContext)


  useEffect(() => {
    console.log("StandList: useEffect - getStands")
    getStandNotes()
    .then(getStands)

  }, [])


  
  
  return (
    <div className="standList">
      {console.log("StandList: Render", stands, standNotes)}
      {
        stands.map(stand => { 
          const standNote = standNotes.filter(note => note.standId === stand.id)
          return <StandCard key={stand.id} stand={stand} note={standNote} />
        })
      }
    </div>
  )
}