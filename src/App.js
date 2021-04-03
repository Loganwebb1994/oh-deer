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
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </head>
      <header className="ohDeer-header">
        <nav className="nav">
          <button className="nav__Button" onClick={() => history.push("/")}>Home</button>
          <button className="nav__Button" onClick={() => history.push("/available-stands")}>Available</button>
          <button className="nav__Button" onClick={() => history.push("/reserved-stands")}>Occupied</button>
          <button className="nav__Button" onClick={() => history.push("/my-hunts")}>My Hunts</button>
        </nav>
      </header>
      <div className="navBorder"></div>
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
