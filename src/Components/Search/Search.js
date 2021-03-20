import React from 'react';
import bike from './../../images/Frame.png';
import car from './../../images/Frame-2.png';
import bus from './../../images/Frame-1.png';
import train from './../../images/Group.png';
const Search = (props) => {
    const {pickFrom,pickTo,ride} = props;
    let rideImage ;
    if(ride === "bike"){
        rideImage = bike;
    }
    else if(ride === "car")
    {
        rideImage = car;
    }
    else if(ride === "bus")
    {
        rideImage = bus;
    }
    else if(ride === "train")
    {
        rideImage = train;
    }
    return (
        <div className="row">
            <div className="col-md-3 m-5 " style={{ backgroundColor: "#EFEFEF" }}>
                <div className="row p-4 m-1" style={{backgroundColor: "#FF6E40" , color: "white", borderLeft: "5px solid white"}}> 
                <h1>{pickFrom}</h1>
                <h1>{pickTo}</h1>
                
                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-3 m-1">
                        <img src={rideImage} style={{width:"50px"}} alt="image"/>
                    </div>
                    <div className="col-4 m-2">
                        <p text-capitalize>{ride} 4</p>
                    </div>
                    <div className="col-3 m-2">
                        <p>$67</p>
                    </div>
                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-3 m-1">
                        <img src={rideImage} style={{width:"50px"}} alt="image"/>
                    </div>
                    <div className="col-4 m-2">
                        <p text-capitalize>{ride} 4</p>
                    </div>
                    <div className="col-3 m-2">
                        <p>$67</p>
                    </div>
                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-3 m-1">
                        <img src={rideImage} style={{width:"50px"}} alt="image"/>
                    </div>
                    <div className="col-4 m-2">
                        <p text-capitalize>{ride} 4</p>
                    </div>
                    <div className="col-3 m-2">
                        <p>$67</p>
                    </div>
                </div>
                
            </div>
            <div className="col-md-8">
                <h1>{rideImage}</h1>
            </div>

        </div>
    );
};

export default Search;