import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Destination = (props) => {

    // const handleChange = (e) => {
    //     console.log(e.target.name,e.target.value)
    // }
    return (
        <div className="row m-2">
            <div className="col-md-3 " style={{ backgroundColor: "#EFEFEF" }}>
                <label htmlFor="pickFrom" className="text-right">Pick From</label><br />
                <input type="text" className="form-control" id="pickFrom" name="pickFrom" required />
                <label htmlFor="pickTo" className="text-right">Pick To</label><br />
                <input type="text" className="form-control" id="pickTo" name="pickTo" required /><br />
                <Link to="/search">
                    <Button onClick={props.handleSearch} className=" btn btn-primary btn-block m-1 p-2" style={{ backgroundColor: "#FF6E40" }}>Search</Button>
                </Link>


            </div>
            <div className="col-md-8">
                <h1>This is second </h1>
            </div>
        </div>
    );
};

export default Destination;