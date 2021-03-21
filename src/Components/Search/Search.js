import React from 'react';
import bike from './../../images/Frame.png';
import car from './../../images/Frame-2.png';
import bus from './../../images/Frame-1.png';
import train from './../../images/Group.png';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import peopleicon from './../../images/peopleicon.png';
import Button from '@material-ui/core/Button';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
const Search = (props) => {
    const { pickFrom, pickTo, ride,data } = props;
    const [rides] = data.filter(r => r.ride == ride);
    const {fare,seat} = rides;
    let rideImage = bike;
   
    if (ride === "bike") {
        rideImage = bike;  
    }
    else if (ride === "car") {
        rideImage = car;
    }
    else if (ride === "bus") {
        rideImage = bus;
    }
    else if (ride === "train") {
        rideImage = train;
       
    }
    return (
        <div className="row">
            <div className="col-md-3 m-5 " style={{ backgroundColor: "#EFEFEF" }}>
                <div className="row " style={{ backgroundColor: "#FF6E40", color: "white"}}>
                  <Timeline >
                      <TimelineItem >
                          <TimelineSeparator >
                              <TimelineDot ></TimelineDot>
                          </TimelineSeparator>
                          <TimelineContent >{pickFrom}</TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                          <TimelineSeparator>
                              <TimelineDot ></TimelineDot>
                          </TimelineSeparator>
                          <TimelineContent>{pickTo}</TimelineContent>
                      </TimelineItem>
                  </Timeline>

                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-2 m-1">
                        <img src={rideImage} style={{ width: "50px" }} alt="image" />
                    </div>
                    <div className="col-6 m-2 text-center">
                        <p text-capitalize>{ride} <img style={{width:'20px'}} src={peopleicon} alt=""/> {seat}</p>
                    </div>
                    <div className="col-2 m-2">
                        <p>${fare}</p>
                    </div>
                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-2 m-1">
                        <img src={rideImage} style={{ width: "50px" }} alt="image" />
                    </div>
                    <div className="col-6 m-2 text-center">
                        <p text-capitalize>{ride} <img style={{width:'20px'}} src={peopleicon} alt=""/> {seat}</p>
                    </div>
                    <div className="col-2 m-2">
                        <p>${fare}</p>
                    </div>
                </div>
                <div className="row  m-2 bg-light p-3">
                    <div className="col-2 m-1">
                        <img src={rideImage} style={{ width: "50px" }} alt="image" />
                    </div>
                    <div className="col-6 m-2 text-center">
                        <p text-capitalize>{ride} <img style={{width:'20px'}} src={peopleicon} alt=""/> {seat}</p>
                    </div>
                    <div className="col-2 m-2">
                        <p>${fare}</p>
                    </div>
                </div>

            </div>
            <div className="col-md-8">
                <Map google={props.google} >
                </Map>
            </div>

        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDbWzon4lRHDne-QK5OrHgYoSoQllDJTVg")
})(Search)