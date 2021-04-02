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
        <div className="formContainer">
        <div className="standNoteForm">
            <label htmlFor="note">Note: </label>
            <textarea id="note" type="textArea" rows="20"  value={note} onChange={handleInputChange} />
            <button className="saveNote" onClick={saveNote}>Save</button>
        </div>
        </div>
    )
}