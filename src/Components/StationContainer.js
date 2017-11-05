import React, { Component } from "react";

class StationContainer extends Component {
  render() {
    return <div>{this.props.station.callingType}</div>
  }
}

export default StationContainer;
