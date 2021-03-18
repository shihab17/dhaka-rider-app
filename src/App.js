import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="">
      <Router>
        <nav className="text-right m-2">
          <Link className="navbar-brand" to="/" >Home</Link>
          <Link className="navbar-brand" to="/" >Destination</Link>
          <Link className="navbar-brand" to="/" >Blog</Link>
          <Link className="navbar-brand" to="/" >Contact</Link>
          <Button className="bg-dark">
            <Link className="navbar-brand" to="/" >Login</Link>
          </Button>

        </nav>
        <Switch>
          <Route path="/home">

          </Route>
          <Route path="/users">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
