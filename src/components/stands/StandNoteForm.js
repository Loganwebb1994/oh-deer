import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { StandContext } from "../animal/AnimalProvider"
import "./Stand.css"
import { useHistory } from 'react-router-dom';

export const StandNoteForm = () => {
    const { addAnimal } = useContext(StandContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const [animal, setAnimal] = useState({
      name: "",
      breed: "",
      locationId: 0,
      customerId: 0
    });

    const history = useHistory();

    useEffect(() => {
      getCustomers().then(getLocations)
    }, [])

    const handleControlledInputChange = (event) => {
      const newAnimal = { ...animal }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newAnimal[event.target.id] = selectedVal
      setAnimal(newAnimal)
    }

    const handleClickSaveAnimal = (event) => {
      event.preventDefault()

      const locationId = animal.locationId
      const customerId = animal.customerId

      if (locationId === 0 || customerId === 0) {
        window.alert("Please select a location and a customer")
      } else {
        addAnimal(animal)
        .then(() => history.push("/animals"))
      }
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