import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])
    const [standNotes, setStandNotes] = useState([])

    const getStands = () => {
      return fetch("http://localhost:8088/stands")
        .then(res => res.json())
        .then(setStands)
    }

    const getStandNotes = () => {
      return fetch(`http://localhost:8088/notes?_expand=stand`)
        .then(res => res.json())
        .then(setStands)
    }

  //  { http://localhost:8088/usersStands?_expand=user&_expand=stand} not sure how to implement this yet
    const addStandNote = (standObj) => {
      return fetch("http://localhost:8088/notes", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(standObj)
      })
      .then(getStands)
  }


    return(
      <StandContext.Provider value ={{
        getStands, stands, setStands, addStandNote, getStandNotes, standNotes, setStandNotes
    }}>
        {props.children}
      </StandContext.Provider>
    )

}