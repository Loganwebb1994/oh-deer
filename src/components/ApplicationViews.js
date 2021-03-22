import React from "react"
import { Route } from "react-router-dom"

import { StandList } from "./stands/StandList"
import { StandNoteForm } from "./stands/StandNoteForm"
import { StandProvider } from "./stands/StandProvider"
import {AvailableStands} from "./stands/AvailableStands"
export const ApplicationViews = () => {
    return (
        <>
          
              <StandProvider>
                <Route exact path="/">
                  <StandList />
                </Route>

                <Route exact path="/add-note">
                  <StandNoteForm />
                </Route>
                  <Route exact path="/available-stands">
                    <AvailableStands/>
                  </Route>
                </StandProvider>

          
            
        </>
    )
}