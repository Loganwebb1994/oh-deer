import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])

    const getStands = () => {
      return fetch("http://localhost:8088/stands")
        .then(res => res.json())
        .then(setStands)
    }

    const getStandNotesById = (id) => {
      return fetch(`http://localhost:8088/notes/${id}`)
    }

  //  { http://localhost:8088/usersStands?_expand=user&_expand=stand}
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
        getStands, stands, setStands, addStandNote
    }}>
        {props.children}
      </StandContext.Provider>
    )

}