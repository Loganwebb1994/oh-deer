import React from "react"
import { Route } from "react-router-dom"

import { StandList } from "./stands/StandList"
import { StandProvider } from "./stands/StandProvider"

export const ApplicationViews = () => {
    return (
        <>
          
            <Route exact path="/">
              <StandProvider>
                <StandList />
              </StandProvider>
            </Route>

            <Route exact path="/add-note">
              
            </Route>

          
            
        </>
    )
}