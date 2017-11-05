import React, { Component } from "react";
import styled from "styled-components";

import TrainsView from "./TrainsView";
import JourneyView from "./JourneyView";

const AppWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: LightGray;
`;

const TrainViewWrapper = styled.div`
  transform: translateX(${props => props.TrainsViewActive ? '0%' : '-100%'});
  width: 100%;
  transition: transform 0.5s ease-out;
`;
const JourneyViewWrapper = styled.div`
  transform: translateX(${props => props.TrainsViewActive ? '100%' : '0%'});
  width: 100%;
  transition: transform 0.5s ease-in;
`;

const urlForServiceAPICall = "https://realtime.thetrainline.com/departures/wat";

class TrainlineApp extends Component {
  state = {
    currentlySelectedService: "",
    TrainsViewActive: true,
    JourneViewActive: false,
  };
  componentDidMount() {
    fetch(urlForServiceAPICall)
      .then(output => output.json())
      .then(output => {
        this.setState({ watTrainData: output });
      });
  }

  //Chose to fetch from API every 30s. Not sure if this is the best timing but can be changed to suit the user.

  apiServiceRefreshDispatcher = () => setTimeout(this.apiServiceRefresh, 30000);

  apiServiceRefresh = () => {
    fetch(urlForServiceAPICall)
      .then(output => output.json())
      .then(output => {
        this.setState({ watTrainData: output });
      });
  };

  apiJourneyRefreshDispatcher = () => setTimeout(this.apiJourneyRefresh, 3000);

  apiJourneyRefresh = () => {
    if (this.state.currentlySelectedService !== "") {
      console.log("orange");
      let urlForJourneyAPICall =
        "https://realtime.thetrainline.com/callingPattern/" +
        this.state.currentlySelectedService +
        "/2017-11-05";
      fetch(urlForJourneyAPICall)
        .then(output => output.json())
        .then(output => {
          this.setState({ journeyData: output });
        });
    }
  };

  handleClickOnService = serviceID => {
    if (serviceID === undefined) {
      console.error("Service Identifier is null");
    }
    let selectedService = serviceID;
    this.setState({ currentlySelectedService: selectedService, TrainsViewActive: false });
    
    return null;
  };

  handleCloseJourneyView = () => {
    this.setState({ currentlySelectedService: "", TrainsViewActive: true });
  };

  render() {
    if (!this.state.watTrainData) return <p>Loading...</p>;
    return (
      <AppWrapper>
        <JourneyViewWrapper TrainsViewActive={this.state.TrainsViewActive}>
          <JourneyView
            currentlySelectedService={this.state.currentlySelectedService}
            handleCloseJourneyView={this.handleCloseJourneyView}
          />
        </JourneyViewWrapper>
        <TrainViewWrapper TrainsViewActive={this.state.TrainsViewActive}>
          <TrainsView
            services={this.state.watTrainData.services}
            handleClickOnService={this.handleClickOnService}
          />
        </TrainViewWrapper>
        {this.apiServiceRefreshDispatcher()}
        {this.apiJourneyRefreshDispatcher()}
      </AppWrapper>
    );
  }
}

export default TrainlineApp;
