import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])
    const [userStands, setUserStands] = useState([])
    const [users, setUsers] = useState([])
    // const currentUserId = sessionStorage.getItem("ohDeer_user")
    // const[currentRelationship]

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

    const getUserStands = () => {
      return fetch(`http://localhost:8088/userStands`)
        .then(res => res.json())
        .then(setUserStands)
    }

    const reserveStand = (userStandObj) => {
      return fetch("http://localhost:8088/userStands", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(userStandObj)
        })
        .then(res => res.json())
        // .then(setUserStands)
      }

    const checkOut = (userObjId) => {
      return fetch(`http://localhost:8088/userStands/${userObjId}`, {
          method: "DELETE"
      })
          .then(getUserStands)
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

      const addNote = () => {
        fetch(`http://localhost:8088/userStands?userId=${currentUserId}`, {
        method: "PATCH",
        body: JSON.stringify({
          note: ""
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }})
      }
          
        
        return(
      <StandContext.Provider value ={{
        getStands, stands, setStands, getUserStands, setUserStands, reserveStand, setAvailability, checkOut, resetAvailability, userStands, getUsers, users
      }}>
        {props.children}
      </StandContext.Provider>
    )
    
}
    //  { http://localhost:8088/usersStands?_expand=user&_expand=stand} not sure how to implement this yet