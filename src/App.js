import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Shared/NavBar/Navbar.jsx";
import Home from "./Components/Home";
import "./index.css"

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className='content bg-background'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
