import React, { Component } from "react";

import StationContainer from "./StationContainer";

class StopWrapper extends Component {
  stops = () => {
    if (this.props.journeyData.service === undefined) {
      console.error("this.props.journeyData.service.stops is undefined");
      return <div>Error</div>
    }
    this.props.journeyData.service.stops.map(station => {
      return <StationContainer key={station.location.crs} station={station} />;
    });
  };
  render() {
    return <div>{this.stops()}</div>;
  }
}

export default StopWrapper;
