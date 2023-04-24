import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Home from "./Components/Home";
import "./index.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
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
