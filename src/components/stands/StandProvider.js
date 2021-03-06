import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])
    const [userStands, setUserStands] = useState([])
    const [users, setUsers] = useState([])
    //remove userStandId
    const [userStandId, setUserStandId] = useState(0)
    const [hunts, setHunts] = useState([])
    // const currentUserId = sessionStorage.getItem("ohDeer_user")
    // const[currentRelationship]

    const getUsers = () => {
      return fetch("https://oh-deer-api.herokuapp.com/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getStands = () => {
      return fetch("https://oh-deer-api.herokuapp.com/stands")
        .then(res => res.json())
        .then(setStands)
    }

    const getUserStands = () => {
      return fetch(`https://oh-deer-api.herokuapp.com/userStands`)
        .then(res => res.json())
        .then(setUserStands)
    }

    const getUserStandById = (id) => {
      return fetch(`https://oh-deer-api.herokuapp.com/userStands/${id}`)
      .then(res => res.json())
    }

    const reserveStand = (userStandObj) => {
      return fetch("https://oh-deer-api.herokuapp.com/userStands", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(userStandObj)
        })
        .then(res => res.json())
        //change last .then to getUserStands
        .then(res => setUserStandId(res.id))
      }

    const checkOut = (userObjId) => {
      return fetch(`https://oh-deer-api.herokuapp.com/${userObjId}`, {
          method: "DELETE"
      })
          .then(getUserStands)
    }
      
      const setAvailability = (standId) => {
      fetch(`https://oh-deer-api.herokuapp.com/stands/${standId}`, {
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
        fetch(`https://oh-deer-api.herokuapp.com/stands/${standId}`, {
        method: "PATCH",
        body: JSON.stringify({
          availability: true
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }})
      .then(getStands)
      }

      const addNote = ( noteString, userStandId) => {
        return fetch(`https://oh-deer-api.herokuapp.com/userStands/${userStandId}`, {
        method: "PATCH",
        body: JSON.stringify({
          note: noteString
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }})
        .then(getUserStands)
      }
          
      const getHunts = () => {
        return fetch("https://oh-deer-api.herokuapp.com/userStands?_expand=stand")
        .then(res => res.json())
        // .then(res => res.sort(function(a, b){return b - a}))
        .then(res => setHunts(res))
      }

      const deleteHunt = (id) => {
      return fetch(`https://oh-deer-api.herokuapp.com/userStands/${id}`,{
        method:"DELETE"
      })
      .then(getHunts)
      }
        
        return(
      <StandContext.Provider value ={{
        getStands, stands, setStands, getUserStands, setUserStands, reserveStand, setAvailability, checkOut, resetAvailability, userStands, getUsers, users, addNote, userStandId,getUserStandById, getHunts, hunts, deleteHunt
      }}>
        {props.children}
      </StandContext.Provider>
    )
    
}