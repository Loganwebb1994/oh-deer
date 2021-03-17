import React, { useContext, useEffect } from "react"
import { StandContext } from "./StandProvider"
import { StandCard } from "./StandCard"
import "./Stand.css"

export const StandList = () => {

  const { stands, getStands } = useContext(StandContext)


  useEffect(() => {
    console.log("StandList: useEffect - getStands")
    getStands()

  }, [])


  return (
    <div className="standList">
      {console.log("StandList: Render", stands)}
      {
        stands.map(stand => {
          return <StandCard key={stand.id} stand={stand} />
        })
      }
    </div>
  )
}