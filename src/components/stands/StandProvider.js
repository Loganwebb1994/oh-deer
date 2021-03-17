import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])

    const getStands = () => {
      return fetch("http://localhost:8088/stands")
        .then(res => res.json())
        .then(setStands)
    }

    const addStandNote = (eventObj) => {
      return fetch("http://localhost:8088/stands", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(eventObj)
      })
      .then(getStands)
  }


    return(
      <StandContext.Provider value ={{
        getStands, stands, setStands, addStandNote
    }}>
        {props.children}
      </StandContext.Provider>
    )

}