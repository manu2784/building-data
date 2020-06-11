import React from "react";

function FloorDetails(props) {

  return (
    <React.Fragment>
    <span>
      <span className="detailsLabel">Max Occupancy:</span>
      {props.floorData.maximum_occupancy}
    </span>
    <span>
      <span className="detailsLabel">Curr Occupancy:</span>
      {props.floorData.current_occupancy}
    </span>
    <span>
      <span className="detailsLabel">Occupancy Rate:</span>
      {(props.floorData.current_occupancy /
        props.floorData.maximum_occupancy) *
        100 +
        "%"}
    </span>
  </React.Fragment>
  );
}

export default FloorDetails;
