import React, { useContext, useEffect, useState } from "react"
import { StandContext } from "../stands/StandProvider"
import "./Stand.css"
import { useHistory } from 'react-router-dom';

export const StandNoteForm = () => {
    const history = useHistory()
    const {getUserStands, addNote} = useContext(StandContext)

    const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
    useEffect(() => {
        getUserStands()
    
        }, [])
    const [note, setNote] = useState({
        note: ""
    })
    const handleInputChange = (event) => {
        const newNote = { ...note }
        newNote[event.target.id] = event.target.value
        setNote(newNote)
    }

    const saveNote = (event) => {
        event.preventDefault()
        addNote(currentUserId, note)
        .then(() => history.push("/"))
    }
 
    return(
        <div>
            <label htmlFor="note">Stand Note: </label>
            <input id="note" type="textArea" onChange={handleInputChange} />
            <button onClick={saveNote}>Save</button>
        </div>
    )
}