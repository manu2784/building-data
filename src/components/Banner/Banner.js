import React from "react";
//import "./Building.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserFriends, faUsers } from "@fortawesome/free-solid-svg-icons";

function Banner(props) {
  return (
      <div className="heading">
        <div>
            <FontAwesomeIcon icon={faBuilding} className="icon"/>
            <span className="label">Building: </span>
          <span className="value">{props.data.name}</span>
        </div>
        <div>
            <FontAwesomeIcon icon={faUsers} className="icon"/>
          <span className="label">Max Occupancy: </span>
          <span className="value">{props.data.maximum_occupancy}</span>
        </div>
        <div>
            <FontAwesomeIcon icon={faUserFriends} className="icon"/>
          <span className="label">Current Occupancy: </span>
          <span className="value">{props.data.current_occupancy}</span>
        </div>
      </div>

  );
}

export default Banner;
