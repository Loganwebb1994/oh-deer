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
  
  
  return (
  
    <div className="standList">
      {
        stands.map(stand => { let notesForStand = userStands.filter(userStand => userStand.standId === stand.id  )
          {console.log(notesForStand, "standNote")}
          return <StandCard key={stand.id} stand={stand} relationships={notesForStand} />
        })
      }
    </div>
  )
}