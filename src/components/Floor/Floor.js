import React, { useState } from "react";
import "./Floor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import FloorDetails from "./FloorDetails";

function Floor(props) {
  let [floorNum, setFloorNum] = useState(0);

  const populatePeople = (n, cur_occ) => {
    let max_occupancy = [];
   // distributes occupancy randomy across room just to simulate real data
    const randomIndices = getRandomIndices(n, cur_occ);
    for (let i = 0; i < n; i++) {
      let occupiedClass = "";
      if (randomIndices.includes(i)) {
        occupiedClass = "occupied";
      }
      max_occupancy.push(
        <div className="desk" key={"p" + i} title={`p ${i+1} ${occupiedClass?"occupied":""}`}>
          <FontAwesomeIcon
            icon={faUser}
            className={`roomIcon ${occupiedClass}`}
          />
        </div>
      );
    }
    return max_occupancy;
  };

  const changeFloor = (dir) => {
    if (dir === 1 && floorNum < (props.floors.length-1)) {
      setFloorNum(floorNum => floorNum+1);
    }

    if (dir === -1 && floorNum > 0) {
        setFloorNum(floorNum => floorNum-1);
      }
  };
  // return floor title to be displayed at the top of the page
  const getFloorNum = () => {
    if (floorNum === 0) return "Ground Floor";
    else return `Floor ${floorNum}`;
  };
  let floorData = props.floors[floorNum].rooms;
  const bgColor =["c1","c2","c3"];
  const fontColor =["fc1","fc2","fc3"];
  return (
    <React.Fragment>
      <div className="container">
        <div className="floorTitle">
          <h3>{getFloorNum()}</h3>
        </div>
        <div className="legend">
          <span>{floorData[0].name}</span>
          <span>{floorData[1].name}</span>
        </div>
        <div className="details">
           <div className={`east ${fontColor[floorNum]}`}>
           <FloorDetails floorData={floorData[0]} floorNum={floorNum}/>
           </div>
          <div className={`west ${fontColor[floorNum]}`}>
          <FloorDetails floorData={floorData[1]} floorNum={floorNum}/>
          </div>
        </div>
        <div className="floor">
          <div className={`room ${bgColor[floorNum]}`}>
            {populatePeople(
              floorData[0].maximum_occupancy,
              floorData[0].current_occupancy
            )}
          </div>
          <div className="divider"></div>
          <div className={`room ${bgColor[floorNum]}`}>
            {populatePeople(
              floorData[1].maximum_occupancy,
              floorData[1].current_occupancy
            )}
          </div>
        </div>
        <div className="controller">
          <button
            onClick={() => {
              changeFloor(-1);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} className="buttonIcon" />
            Previous Floor
          </button>
          <button
            onClick={() => {
              changeFloor(1);
            }}
          >
            Next Floor
            <FontAwesomeIcon icon={faAngleRight} className="buttonIcon" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

function getRandomIndices(n, x) {
  let randomIndices = [];
  while (randomIndices.length < x) {
    let index = Math.round(Math.random() * (n - 1));
    if (!randomIndices.includes(index)) randomIndices.push(index);
  }
  return randomIndices;
}

export default Floor;
