import React, { Component } from "react";

import StationContainer from "./StationContainer";

class StopWrapper extends Component {
  stops = this.props.journeyData.service.stops.map(station => {
    return <StationContainer key={station.location.crs} station={station} />;
  });
  render() {

    return <div>{this.stops}</div>;
  }
}

export default StopWrapper;