import React, { useContext, useEffect, useState } from "react"
import { StandContext } from "../stands/StandProvider"
import "./Stand.css"
import { useHistory, useParams } from 'react-router-dom';

export const StandNoteForm = () => {
    const history = useHistory()
    const {getUserStands, addNote, getUserStandById} = useContext(StandContext)

    const {userStandId} = useParams()

    const currentUserId = parseInt(sessionStorage.getItem("ohDeer_user"))
    const [note, setNote] = useState("")
    useEffect(() => {
        if (userStandId){
        getUserStandById(userStandId)
        .then(res => setNote(res.note))
        }
        
    
        }, [])

    const handleInputChange = (event) => {
        let newNote = note 
        newNote = event.target.value
        setNote(newNote)
    }

    const saveNote = (event) => {
        event.preventDefault()
        addNote(note, userStandId)
        .then(() => history.push("/my-hunts"))
    }



    return(
        <div>
            <label htmlFor="note">Note: </label>
            <input id="note" type="textArea" value={note} onChange={handleInputChange} />
            <button onClick={saveNote}>Save</button>
        </div>
    )
}