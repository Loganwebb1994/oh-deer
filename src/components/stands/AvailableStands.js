import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import { Route, useHistory } from "react-router-dom"
import "./Stand.css"

export const AvailableStands = () => {
  const history = useHistory()
  const { stands, getStands, getUserStands, userStands, getUsers } = useContext(StandContext)


  useEffect(() => {
    getUserStands()
    // .then(getStands)

  }, [])

  const filteredStands = stands.filter(stand => stand.availability === true)
  
  
  return (
  <>
  <button onClick={() => history.push("/")}>All Stands</button>
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