import React, { Component } from "react";
import styled from "styled-components";

import StopWrapper from "./StopWrapper";
import ServiceDescription from "./ServiceDescription";

const JourneyWrapper = styled.div`padding: 3%;`;

const JourneyContainer = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 1%;
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.button`
  background-color: white;
  border-width: 1px;
  border-color: lightGray;
  border-radius: 2px;
  cursor: pointer;
  width: 20%;
  align-self: flex-start;
`;

const LoadingDisplay = styled.article`
text-align: center;
flex: 1;
`

class JourneyView extends Component {
  //When returning <LoadingDisplay>Error</LoadingDisplay>;, it causes react to re-render? Need to fix.
  doesJourneyDataExist = () => {
    if (this.props.journeyData === undefined) {
      return <LoadingDisplay>Loading...</LoadingDisplay>;
    }
    if (this.props.journeyData.errors[0] !== undefined) {
      console.error(this.props.journeyData.errors[0].code);
      return <LoadingDisplay>Error</LoadingDisplay>;
    }
    return (
      <div>
        <ServiceDescription journeyData={this.props.journeyData} />
        <StopWrapper journeyData={this.props.journeyData} />
      </div>
    );
  };
  render() {
    return (
      <JourneyWrapper>
        <JourneyContainer>
          <ButtonWrapper
            onClick={() => this.props.handleCloseJourneyView()}
            aria-hidden={this.props.TrainsViewActive ? true : false}
          >
            Return to main page.
          </ButtonWrapper>
          <br/>
          {this.doesJourneyDataExist()}
        </JourneyContainer>
      </JourneyWrapper>
    );
  }
}

export default JourneyView;
