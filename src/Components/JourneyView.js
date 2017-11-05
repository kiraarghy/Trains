import React, { Component } from "react";



class JourneyView extends Component {
  render() {
     
    return (
      <div>
        <button onClick={() => this.props.handleCloseJourneyView()}>
          Boop
        </button>
        <div>🚆</div>
      </div>
    );
  }
}


export default JourneyView;
