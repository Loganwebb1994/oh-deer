import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import { Route, useHistory } from "react-router-dom"
import "./Stand.css"

export const ReservedStands = () => {
  const history = useHistory()
  const { stands, getStands, getUserStands, userStands, getUsers } = useContext(StandContext)


  useEffect(() => {
    getUserStands()
    .then(getStands)

  }, [])

  const filteredStands = stands.filter(stand => stand.availability === false)
  
  
  return (
  <>
    <div className="standList">
      {
        filteredStands.map(stand => { let notesForStand = userStands.filter(userStand => userStand.standId === stand.id  )
          return <StandCard key={stand.id} stand={stand} relationships={notesForStand} />
        })
      }
    </div>
  </>
  )
}