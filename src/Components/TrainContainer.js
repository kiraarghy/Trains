import React, { Component } from "react";

class TrainContainer extends Component {
  onTimeCalculator = () => {
    let service = this.props.service;
    if (service.realTimeUpdatesInfo.realTimeServiceInfo === undefined) {
      if (service.realTimeUpdatesInfo.delayReason !== undefined) {
        return "Delayed";
      }
      console.error(
        "There was no realTimeUpdatesInfo returned for service: " +
          service.serviceIdentifier
      );
    }
    let realTime = service.realTimeUpdatesInfo.realTimeServiceInfo.realTime.substr(
      11,
      5
    );
    let scheduledTime = service.scheduledInfo.scheduledTime.substr(11, 5);
    if (realTime === scheduledTime) {
      return "On Time";
    }
    if (realTime !== scheduledTime) {
      return "Exp. " + realTime;
    }
  };
  render() {
    return (
      <div>
        <div>
          {this.props.service.scheduledInfo.scheduledTime.substr(11, 5)}
        </div>
        <div>
          {this.props.service.destinationList[0].crs}
          {this.props.service.serviceOperator}
        </div>
        <div>Plat. {this.props.service.scheduledInfo.scheduledPlatform}</div>
        <div>
          {this.onTimeCalculator()}
        </div>
      </div>
    );
  }
}

export default TrainContainer;

//
