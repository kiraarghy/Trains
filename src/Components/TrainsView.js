import React, { Component } from "react";

class TrainsView extends Component {
  render() {
    var Services = this.props.services.map(
      (service, key = this.props.services.serviceIdentifier) => {
        return (
          <div>
            {service.serviceIdentifier}
          </div>
        );
      }
    );
    return <div>{Services}</div>;
  }
}

export default TrainsView;

//Gonna want an onclick handler which setState of currently viewed train [Use Key as that uses the serviceIdentifier i.e. unique] and also switches view to journeyView
//When onclick is clicked and journeyView is enabled, then use .find on the watTrainData to filter on that serviceIdentifier,
//BOOM YOu're done!