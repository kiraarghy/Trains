import React, { Component } from "react";

import StopWrapper from "./StopWrapper";

class JourneyView extends Component {
  doesJourneyDataExist = () => {
    if (this.props.journeyData === undefined) {
      return <div>Loading...</div>;
    }
    return <StopWrapper journeyData={this.props.journeyData} />;
  };
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleCloseJourneyView()}>
          Boop
        </button>
        <span>🚆</span>
        {this.doesJourneyDataExist()}
      </div>
    );
  }
}

export default JourneyView;
