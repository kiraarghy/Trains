import React, { Component } from "react";

class ServiceDescription extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.journeyData.service !== undefined
            ? this.props.journeyData.service.serviceOrigins[0]
            : "Origin is not available."}
        </div>{" "}
        To
        <div>
          {this.props.journeyData.service !== undefined
            ? this.props.journeyData.service.serviceDestinations[0]
            : "Destination is not available."}
        </div>
        <div>
          {this.props.journeyData.service !== undefined
            ? this.props.journeyData.service.serviceOperator
            : "Operator is not available."}
        </div>
      </div>
    );
  }
}

export default ServiceDescription;
