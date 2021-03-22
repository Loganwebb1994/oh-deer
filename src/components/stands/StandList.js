import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import "./Stand.css"

export const StandList = () => {

  const { stands, getStands, getUserStands, userStands, getUsers } = useContext(StandContext)

  useEffect(() => {
    getUsers()
    }, [])

  useEffect(() => {
    getUserStands()
    .then(getStands())

  }, [])

    console.log(userStands)
  let notesForStand = []
  
  return (
  
    <div className="standList">
      {
        stands.map(stand => { userStands.filter(userStand => userStand.standId ===stand.id? notesForStand.push(userStand) : "" )
          return <StandCard key={stand.id} stand={stand} relationship={notesForStand} />
        })
      }
    </div>
  )
}