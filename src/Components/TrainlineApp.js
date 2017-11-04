import React, { Component } from "react";

import TrainsView from './TrainsView'

const urlForAPICall = 'https://realtime.thetrainline.com/departures/wat'

class TrainlineApp extends Component {
  state = {};
  componentDidMount() {
    fetch(urlForAPICall)
    .then(output => output.json())
    .then(output => {this.setState({watTrainData: output})})
  }
  render() {
    if(!this.state.watTrainData) return (<p>Loading...</p>)
    return (
      <div>
        <TrainsView services={this.state.watTrainData.services}/>
      </div>
    );
  }
}

export default TrainlineApp;