import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])

    const getStands = () => {
      return fetch("http://localhost:8088/stands")
        .then(res => res.json())
        .then(setLocations)
    }

    return(
      <StandContext.Provider value ={{
        events, getEvents, addEvent, updateEvent, getEventById, getEventsByUserId, deleteEvent
    }}>
        {props.children}
      </StandContext.Provider>
    )

}