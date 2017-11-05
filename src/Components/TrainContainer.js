import React, { Component } from "react";
import styled from "styled-components";

const TrainWrapper = styled.article`
  margin-bottom: 2px;
  border-radius: 2px;
  padding: 1%;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-align: center;
`;
const TimeWrapper = styled.time`flex: 2;`;
const DestinationOperatorWrapper = styled.section`flex: 5;`;
const PlatAndOnTimeWrapper = styled.section`flex: 3;`;
const ButtonWrapper = styled.button`
  flex: 1;
  background-color: white;
  border-width: 0px;
`;
const Arrow = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid black;
  border-width: 2px 2px 0 0;
  transform: rotate(45deg);
`;
const DelayedService = styled.text`color: red;`
const OnTimeService = styled.text`color: green;`
class TrainContainer extends Component {
  onTimeCalculator = () => {
    let service = this.props.service;
    if (service.realTimeUpdatesInfo.realTimeServiceInfo === undefined) {
      if (service.realTimeUpdatesInfo.delayReason !== undefined) {
        return <DelayedService>Delayed</DelayedService>;
      }
      console.error(
        "There was no realTimeUpdatesInfo returned for service: " +
          service.serviceIdentifier
      );
      return <DelayedService>No ETA</DelayedService>
    }
    let realTime = service.realTimeUpdatesInfo.realTimeServiceInfo.realTime.substr(
      11,
      5
    );
    let scheduledTime = service.scheduledInfo.scheduledTime.substr(11, 5);
    if (realTime === scheduledTime) {
      return <OnTimeService>On Time</OnTimeService>;
    }
    if (realTime !== scheduledTime) {
      return <DelayedService>Exp. {realTime}</DelayedService>;
    }
  };
  render() {
    return (
      <TrainWrapper>
        <TimeWrapper>
          {this.props.service.scheduledInfo.scheduledTime.substr(11, 5)}
        </TimeWrapper>
        <DestinationOperatorWrapper>
          {this.props.service.destinationList[0].crs}
          {this.props.service.serviceOperator}
        </DestinationOperatorWrapper>
        <PlatAndOnTimeWrapper>
          <div>Plat. {this.props.service.scheduledInfo.scheduledPlatform}</div>
          <div>{this.onTimeCalculator()}</div>
        </PlatAndOnTimeWrapper>
        <ButtonWrapper>
          <Arrow />
        </ButtonWrapper>
      </TrainWrapper>
    );
  }
}

export default TrainContainer;

//
