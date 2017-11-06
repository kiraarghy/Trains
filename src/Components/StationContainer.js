import React, { Component } from "react";

class StationContainer extends Component {
  //For this component you want to check whether the train has arrived or departed, if it has departure then put the dept time down
  //if it hasn't arrived yet then put down the exp arrival time.
  //
  l;
  departureTime = () => {
    if (this.props.station.departure.scheduled !== undefined) {
      return this.props.station.departure.scheduled.scheduledTime.substr(11, 5);
    }
    if (this.props.station.departure.notApplicable === true) {
      return this.props.station.arrival.scheduled.scheduledTime.substr(11, 5);
    }
    return "No ETA";
  };

  hasDeparted = () => {
    let station = this.props.station;
    if (station.departure.notApplicable === true) {
      return (
        "Exp." +
        station.arrival.realTime.realTimeServiceInfo.realTime.substr(11, 5)
      );
    }
    if (station.arrival.notApplicable === true) {
      return (
        "Dept. " +
        station.departure.realTime.realTimeServiceInfo.realTime.substr(11, 5)
      );
    }
    if (
      station.arrival.realTime.realTimeServiceInfo.hasArrived === true &&
      station.departure.realTime.realTimeServiceInfo.hasDeparted === false
    ) {
      return (
        "Dept. " +
        station.departure.realTime.realTimeServiceInfo.realTime.substr(11, 5)
      );
    }
    if (station.departure.realTime.realTimeServiceInfo.hasDeparted === true) {
      return (
        "Dept." +
        station.departure.realTime.realTimeServiceInfo.realTime.substr(11, 5)
      );
    }
    if (station.arrival.realTime.realTimeServiceInfo.hasArrived === false) {
      return (
        "Exp. " +
        station.arrival.realTime.realTimeServiceInfo.realTime.substr(11, 5)
      );
    }

    console.error("Error in " + station.serviceUid + "hasDeparted function");
    return "Not know at this time";
  };

  render() {
    return (
      <div>
        {this.departureTime()}
        {this.props.station.location.crs}
        {this.hasDeparted()}
      </div>
    );
  }
}

export default StationContainer;

//      if (
//   this.props.station.departure.realTime.realTimeServiceInfo
//   .hasDeparted === true
// ) {
// return <div>Departed</div>;
// }

// return (
// <div>
//   {this.props.station.departure.realTime.realTimeServiceInfo.scheduled.scheduledTime.substr(
//     11,
//     5
//   )}
// </div>
// );

// hasDeparted = () => {
//   let station = this.props.station;
//   if (station.departure === undefined) {
//     console.error("No realtime data available");
//     return "No ETA";
//   }
//   if (station.departure.scheduled !== undefined) {
//     let scheduledTime = station.departure.scheduled.scheduledTime.substr(
//       11,
//       5
//     );
//     if (
//       station.departure.realTime.realTimeServiceInfo.realTime !== undefined
//     ) {
//       let realTime = station.departure.realTime.realTimeServiceInfo.realTime.substr(
//         11,
//         5
//       );
//       if (realTime === "00:00") {
//         return "No ETA";
//       }
//       if (realTime !== scheduledTime) {
//         return "Dept." + realTime;
//       }
//       return "On Time";
//     }
//     return "No ETA";
//   }
// };
