import React from 'react';
import './App.css';
import data from "./data.json";     // Loading source data from file
import Building from "./components/Building/Building";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function App() {

  return (
    <div className="App">
      <header className="header">      
      <div className="dateTime">
            <FontAwesomeIcon icon={faCalendarDay} className="icon"/>
          <span className="label">{moment.utc(data.timestamp).format("ll")}</span>
        </div></header>
      <div className="dashboard">
       <Building data={data}/>
      </div>



    </div>
  );
}

export default App;
