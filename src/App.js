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
        <nav className="nav">
          <button className="nev__button" onClick={() => history.push("/")}>Home</button>
          <button className="nav__Button" onClick={() => history.push("/available-stands")}>Available</button>
          <button className="nav__Button" onClick={() => history.push("/reserved-stands")}>Occupied</button>
          <button className="nav__Button" onClick={() => history.push("/my-hunts")}>My Hunts</button>
        </nav>
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
