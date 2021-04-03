import React, { useContext, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import "./Stand.css"
import "../../App.css"

export const StandList = () => {
  const history = useHistory()

  const { stands, getStands, getUserStands, userStands, getUsers } = useContext(StandContext)


  useEffect(() => {
    getUserStands()
    .then(getStands)


  }, [])


  
  
  return (
  <>
  
    
    <div className="standList">
      {
        stands.map(stand => { let notesForStand = userStands.filter(userStand => userStand.standId === stand.id  )
          return <StandCard key={stand.id} stand={stand} relationships={notesForStand} />
        })
      }
    </div>
  </>
  )
}