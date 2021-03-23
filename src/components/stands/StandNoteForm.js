import React, { useContext, useEffect, useState } from "react"
import { StandContext } from "../stands/StandProvider"
import "./Stand.css"
import { useHistory } from 'react-router-dom';

export const StandNoteForm = () => {
    const {getUserStands} = useContext(StandContext)
    useEffect(() => {
        getUserStands()
    
        }, [])
    const [note, setNotes] = useState({
        note: ""
    })


    return(
        <form>
            <label htmlFor="note">Stand Note: </label>
            <input id="note" type="textArea" />
            <button>Save</button>
        </form>
    )
}