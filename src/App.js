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
import NoMatch from './Components/NoMatch/NoMatch';
import data from './Data/Data.json';
export const loggedInUserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [pickFrom, setPickFrom] = useState([]);
  const [pickTo, setPickTo] = useState([]);
  const [rider, setRider] = useState([])
  let history = useHistory();
  const handleRider = (ride) => {
    setRider(ride)
  }
  
  const handleSearch = () => {
    const pickFrom = document.getElementById("pickFrom").value;
    const pickTo = document.getElementById("pickTo").value;
    // console.log(pickFrom,pickTo)
    setPickFrom(pickFrom);
    setPickTo(pickTo);
  }
  console.log("log in user", loggedInUser)
  return (
    <div className="apps">
      <loggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>

          <nav className="m-4 p-2">
            <Link className="navbar-brand text-white" style={{ fontSize: '32px', marginRight: '50px' }} >Dhaka Riders</Link>
            <Link className="navbar-brand" to="/home" >Home</Link>
            <Link className="navbar-brand" to="/destination" >Destination</Link>
            <Link className="navbar-brand" to="/" >Blog</Link>
            <Link className="navbar-brand" to="/" >Contact</Link>
            {
              loggedInUser.email ? <span className="text-light font-weight-bold">{loggedInUser.name}</span> : <Button className="bg-dark">
                <Link className="navbar-brand active" to="/login" >Login</Link>
              </Button>
            }


          </nav>
          <Switch>
            <Route path="/home">
              <Home handleRider={handleRider}></Home>
            </Route>
            <PrivateRoute path="/destination">
              <Destination  handleSearch={handleSearch}></Destination>
            </PrivateRoute>
            <PrivateRoute path="/search">
              <Search data={data} pickFrom={pickFrom} pickTo={pickTo} ride={rider}></Search>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </loggedInUserContext.Provider>
    </div>
  );
}

export default App;
