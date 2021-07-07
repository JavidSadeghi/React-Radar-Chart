import './App.css';

import React from "react";
import { RadarChart } from './components/RadarChart';



export default function App() {
  return (
    <div className="App">
      <div className='container' >
        <h1>Snow Flake/Radar Chart Demo</h1>
        <RadarChart />
        <h5>Javid Sadeghi Ashrafi</h5>
        <h6>javid.sadeghi@gmail.com</h6>
        <h6>7/7/2021</h6>
      </div>
    </div>
  );
}
