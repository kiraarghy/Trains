import React, { Component } from "react";

import TrainContainer from './TrainContainer'

class TrainsView extends Component {
  render() {
    var trainServices = this.props.services.map(
      (service) => {
        if (service.transportMode !== "TRAIN") {return null}
        return (
          <TrainContainer key={service.serviceIdentifier} service ={service}/>
        );
      }
    );
    return <div>{trainServices}</div>;
  }
}

export default TrainsView;

//Gonna want an onclick handler which setState of currently viewed train [Use Key as that uses the serviceIdentifier i.e. unique] and also switches view to journeyView
//When onclick is clicked and journeyView is enabled, then use .find on the watTrainData to filter on that serviceIdentifier,
//BOOM YOu're done!