import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from './components/ApplicationViews';
import {Route, Redirect} from "react-router-dom"
import {Login} from "./components/auth/Login"
import {Register} from "./components/auth/Register"

function App() {
  <>
  <Route
    render={() => {
      if (sessionStorage.getItem("ohDeer_user")) {
        return 
            
            <ApplicationViews />

      } else {
        return <Redirect to="/login" />;
      }
    }}
  />

  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
</>
}

export default App;
