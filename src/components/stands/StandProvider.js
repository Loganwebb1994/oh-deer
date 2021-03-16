import React, {useState, createContext} from "react"

export const StandContext = createContext()

export const StandProvider = (props) => {
    
    const [stands, setStands] = useState([])

    const getStands = () => {
      return fetch("http://localhost:8088/stands")
        .then(res => res.json())
        .then(setStands)
    }

    return(
      <StandContext.Provider value ={{
        getStands, stands, setStands
    }}>
        {props.children}
      </StandContext.Provider>
    )

}