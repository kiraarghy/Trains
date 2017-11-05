import React, { Component } from "react";
import styled from "styled-components";

import TrainContainer from "./TrainContainer";

const ServicesWrapper = styled.div`padding: 3%;`;

class TrainsView extends Component {
  trainServices = this.props.services.map(service => {
    if (service.transportMode !== "TRAIN") {
      return null;
    }
    return (
      <TrainContainer
        key={service.serviceIdentifier}
        service={service}
        handleClickOnService={this.props.handleClickOnService}
      />
    );
  });
  render() {
    return <ServicesWrapper>{this.trainServices}</ServicesWrapper>;
  }
}

export default TrainsView;

//Gonna want an onclick handler which setState of currently viewed train [Use Key as that uses the serviceIdentifier i.e. unique] and also switches view to journeyView
//When onclick is clicked and journeyView is enabled, then use .find on the watTrainData to filter on that serviceIdentifier,
//BOOM YOu're done!
