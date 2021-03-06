import React from "react"
import { Route } from "react-router-dom"

import { StandList } from "./stands/StandList"
import { StandNoteForm } from "./stands/StandNoteForm"
import { StandProvider } from "./stands/StandProvider"
import {AvailableStands} from "./stands/AvailableStands"
import { ReservedStands } from "./stands/ReservedStands"
import { HuntList } from "./Hunts/HuntList"
export const ApplicationViews = () => {
    return (
        <>
          
              <StandProvider>
                  <Route exact path="/">
                    <StandList />
                  </Route>
                  <Route exact path="/stands/:userStandId(\d+)">
                    <StandNoteForm />
                  </Route>
                  <Route exact path="/available-stands">
                    <AvailableStands/>
                  </Route>
                  <Route exact path="/reserved-stands">
                    <ReservedStands/>
                  </Route>
                  <Route exact path="/my-hunts">
                    <HuntList/>
                  </Route>
                </StandProvider>

          
            
        </>
    )
}