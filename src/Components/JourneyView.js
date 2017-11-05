import React, { Component } from "react";

import StopWrapper from "./StopWrapper";

class JourneyView extends Component {
  doesJourneyDataExist = () => {
    if (this.props.journeyData === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          {this.props.journeyData.service !== undefined
            ? this.props.journeyData.service.serviceOrigins[0]
            : null}
        </div>{" "}
        To
        <div>
          {this.props.journeyData.service !== undefined
            ? this.props.journeyData.service.serviceDestinations[0]
            : null}
        </div>
        <div>{this.props.journeyData.service !== undefined
            ? this.props.journeyData.service.serviceOperator: null}</div>
        <StopWrapper journeyData={this.props.journeyData} />
      </div>
    );
  };
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleCloseJourneyView()}>
          Boop
        </button>
        {this.doesJourneyDataExist()}
      </div>
    );
  }
}

export default JourneyView;
