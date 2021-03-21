import React from 'react';
import bike from './../../images/Frame.png';
import car from './../../images/Frame-2.png';
import bus from './../../images/Frame-1.png';
import train from './../../images/Group.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = (props) => {
        console.log(props.handleRide)
        const {handleRider} = props;
        return (
                <div className="home">
                
                <div className="row m-5 p-5 justify-content-center ">
                        <Link to="/destination" className=" bike col-md-2  text-center m-3 p-4 ">
                                <Button onClick={() => handleRider("bike")} className="bg-light">
                                        <img src={bike} style={{ width: "150px" }} alt="" />
                                        <h4 className="p-4 text-dark">BIKE</h4>
                                </Button>
                        </Link>
                        <Link to="/destination" className=" car col-md-2  text-center m-3 p-4">
                                <Button onClick={() => handleRider("car")} className="bg-light">
                                        <img src={car} style={{ width: "150px" }} alt="" />
                                        <h4 className="p-4 text-dark">CAR</h4>
                                </Button>
                        </Link>
                        <Link to="/destination" className=" bus col-md-2  text-center m-3 p-4">
                        <Button onClick={() => handleRider("bus")} className="bg-light">
                                <img src={bus} style={{ width: "150px" }} alt="" />
                                <h4 className="p-4 text-dark">BUS</h4>
                        </Button>
                        </Link>
                        <Link to="/destination" className="bus col-md-2  text-center m-3 p-4">
                        <Button onClick={() => handleRider("train")} className="bg-light">
                                <img src={train} style={{ width: "150px" }} alt="" />
                                <h4 className="p-4 text-dark">TRAIN</h4>
                        </Button>
                        </Link>
                        
                </div>        
                </div>
        );
};

export default Home;