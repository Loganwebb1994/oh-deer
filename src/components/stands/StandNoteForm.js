import React, { useContext, useEffect, useState } from "react"
import { StandContext } from "../animal/AnimalProvider"
import "./Stand.css"
import { useHistory } from 'react-router-dom';

export const StandNoteForm = () => {
    const { addStandNote, getStands } = useContext(StandContext)
    const [standNote, setStandNote] = useState({
        content: "",
        userId: 0,
        standId: 0
    });

    const history = useHistory();

    useEffect(() => {
      getStands()
    }, [])

    const handleControlledInputChange = (event) => {
      const newStandNote = { ...standNote }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newStandNote[event.target.id] = selectedVal
      setStandNote(newStandNote)
    }

    const handleClickSaveAnimal = (event) => {
      event.preventDefault()
    }


    return (
      <form className="standNoteForm">
          <h2 className="standNoteForm__title">Stand Note</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="content">Body:</label>
                  <input type="text" id="content" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Note Body" value={animal.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="breed">Animal breed:</label>
                  <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="customerId">Customer: </label>
                  <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveAnimal}>
            Save Animal
          </button>
      </form>
    )
}