import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])
    const [standNotes, setStandNotes] = useState([])
    const [userStand, setUserStand] = useState([])
    const [users, setUsers] = useState([])

    const getUsers = () => {
      return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getStands = () => {
      return fetch("http://localhost:8088/stands")
        .then(res => res.json())
        .then(setStands)
    }

    const getStandNotes = () => {
      return fetch(`http://localhost:8088/usersStands`)
        .then(res => res.json())
        .then(setStandNotes)
    }
    //needs refactoring after erd change
    // const addStandNote = (standObj) => {
    //   return fetch("http://localhost:8088/notes", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //       body: JSON.stringify(standObj)
    //     })
    //   .then(getStands)
    // }
    
    const reserveStand = (userStandObj) => {
      return fetch("http://localhost:8088/usersStands", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(userStandObj)
        })
        .then(res => res.json())
        // .then(setUserStand)
      }

    const checkOut = (userObjId) => {
      return fetch(`http://localhost:8088/usersStands/${userObjId}`, {
          method: "DELETE"
      })
          .then(getStandNotes)
    }
      
      const setAvailability = (standId) => {
      fetch(`http://localhost:8088/stands/${standId}`, {
        method: "PATCH",
        body: JSON.stringify({
          availability: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }})
      .then(getStands)
      }

      const resetAvailability = (standId) => {
        fetch(`http://localhost:8088/stands/${standId}`, {
        method: "PATCH",
        body: JSON.stringify({
          availability: true
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }})
      .then(getStands)
      }
          
        
        return(
      <StandContext.Provider value ={{
        getStands, stands, setStands, getStandNotes, standNotes, setStandNotes, reserveStand, setAvailability, checkOut, resetAvailability, userStand, getUsers, users
      }}>
        {props.children}
      </StandContext.Provider>
    )
    
}
    //  { http://localhost:8088/usersStands?_expand=user&_expand=stand} not sure how to implement this yet