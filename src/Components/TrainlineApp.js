
import React, { Component } from "react";
import styled from "styled-components";

import TrainsView from './TrainsView'

const AppWrapper = styled.div`font-family: "Roboto", sans-serif; background-color: gray;`

const urlForAPICall = 'https://realtime.thetrainline.com/departures/wat'

class TrainlineApp extends Component {
  state = {};
  componentDidMount() {
    fetch(urlForAPICall)
    .then(output => output.json())
    .then(output => {this.setState({watTrainData: output})})
  }

//Chose to fetch from API every 30s. Not sure if this is the best timing but can be changed to suit the user.

  apiRefreshDispatcher = () => setTimeout(this.apiRefresh, 30000);

  apiRefresh = () => {
    fetch(urlForAPICall)
    .then(output => output.json())
    .then(output => {this.setState({watTrainData: output})}) 
  }

  render() {
    if(!this.state.watTrainData) return (<p>Loading...</p>)
    return (
      <AppWrapper>
        <TrainsView services={this.state.watTrainData.services}/>
        {this.apiRefreshDispatcher()}
      </AppWrapper>
    );
  }
}

export default TrainlineApp;