import './App.css';
import { Route, Redirect, useHistory } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { userStorageKey } from "./components/auth/authSettings"
import { StandList } from "./components/stands/StandList"

import { ApplicationViews } from './components/ApplicationViews';

function App() {
  const history = useHistory()
  return (
    <div className="ohDeer">
      <header className="ohDeer-header">
        <div>Oh-Deer</div>
        <div className="toggleButtonContainer">
          <button className="toggleButton" onClick={() => history.push("/available-stands")}>Available Stands</button>
          <button className="toggleButton" onClick={() => history.push("/reserved-stands")}>Reserved Stands</button>
        </div>
      </header>
      <Route render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <>
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }} />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
