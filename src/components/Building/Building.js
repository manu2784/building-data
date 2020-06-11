import React from "react";
import "./Building.css";
import Banner from "../Banner/Banner";
import Floor from "../Floor/Floor";
function Building(props) {
  const { name, maximum_occupancy, current_occupancy, timestamp } = props.data;

  return (
    <React.Fragment>
      <div className="building">
        {/* component to display building details */}
        <Banner
          data={{ name, maximum_occupancy, current_occupancy, timestamp }}
        />

        {/* component to display floor details */}
        <Floor floors={props.data.floors}/>

      </div>
    </React.Fragment>
  );
}

export default Building;
