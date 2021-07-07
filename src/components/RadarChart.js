import React from "react";
import { getChartData, options } from "./RadarConfig";
import { Radar } from "react-chartjs-2";

export class RadarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Radar data={(canvas) => getChartData(canvas)} options={options} />
    );
  }
}