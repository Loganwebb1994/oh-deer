import React from "react"
import { Route } from "react-router-dom"

import { StandList } from "./stands/StandList"
import { StandNoteForm } from "./stands/StandNoteForm"
import { StandProvider } from "./stands/StandProvider"
import {AvailableStands} from "./stands/AvailableStands"
export const ApplicationViews = () => {
    return (
        <>
          
            <Route exact path="/">
              <StandProvider>
                <StandList />
              </StandProvider>
            </Route>

            <Route exact path="/add-note">
              <StandNoteForm />
            </Route>
            <Route exact path="/available-stands">
              <StandProvider>
                <AvailableStands/>
              </StandProvider>
            </Route>

          
            
        </>
    )
}