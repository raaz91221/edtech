import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Learning Hours",
      fill: false,
      radius: 5,
      pointBorderWidth: 2,
      lineTension: 0.5,
      backgroundColor: "rgba(0,0,0,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: ["0", "1.5", "2.5", "1", "4", "3", "2"],
    },
  ],
};

export default class LearningChart extends Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Learning Hour Per Week",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
        />
      </div>
    );
  }
}
