import React, { useContext, useEffect, useState } from "react"
import { StandContext } from "../stands/StandProvider"
import "./Stand.css"
import { useHistory } from 'react-router-dom';

export const StandNoteForm = () => {
    const history = useHistory()
    const {getUserStands, addNote, userStandId, getUserStandById} = useContext(StandContext)

    const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
    const [note, setNote] = useState({
        note: ""
    })
    useEffect(() => {
        getUserStands()
        getUserStandById(userStandId)
        .then(setNote)
    
        }, [])

    useEffect(() => {
        console.log(note)
    }, [note])
    const handleInputChange = (event) => {
        const newNote = { ...note }
        newNote[event.target.id] = event.target.value
        setNote(newNote)
    }

    const saveNote = (event) => {
        event.preventDefault()
        addNote(note, userStandId)
        .then(() => history.push("/"))
    }



    return(
        <div>
            <label htmlFor="note">Stand Note: </label>
            <input id="note" type="textArea" value={note.note} onChange={handleInputChange} />
            <button onClick={saveNote}>Save</button>
        </div>
    )
}