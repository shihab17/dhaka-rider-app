import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Search from './Components/Search/Search';
export const loggedInUserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [pickFrom, setPickFrom] = useState([]);
  const [pickTo, setPickTo] = useState([]);
  const [rider, setRider] = useState([])
  let history = useHistory();
  const handleRider = (ride) => {
    console.log("clicked by", ride)
    setRider(ride)
  }
  const handleSearch = () => {
    const pickFrom = document.getElementById("pickFrom").value;
    const pickTo = document.getElementById("pickTo").value;
    // console.log(pickFrom,pickTo)
    setPickFrom(pickFrom);
    setPickTo(pickTo);
  }
  return (
    <div className="">
      <loggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <p>name:{loggedInUser.name} </p>
        <Router>
          <nav className="text-right m-2">
            <Link className="navbar-brand" to="/home" >Home</Link>
            <Link className="navbar-brand" to="/destination" >Destination</Link>
            <Link className="navbar-brand" to="/" >Blog</Link>
            <Link className="navbar-brand" to="/" >Contact</Link>
            <Button className="bg-dark">
              <Link className="navbar-brand" to="/login" >Login</Link>
            </Button>

          </nav>
          <Switch>
            <Route path="/home">
              <Home handleRider={handleRider}></Home>
            </Route>
            <PrivateRoute path="/destination">
              <Destination handleSearch={handleSearch}></Destination>
            </PrivateRoute>
            <PrivateRoute path="/search">
              <Search pickFrom={pickFrom} pickTo={pickTo} ride={rider}></Search>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </loggedInUserContext.Provider>
    </div>
  );
}

export default App;
