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
  font-size: 1em;
`;
const SubContent = styled.div`
  margin-top: 5%;
  font-size: 0.8em;
`;
const TimeWrapper = styled.time`flex: 2;`;
const DestinationOperatorWrapper = styled.section`flex: 5;`;
const Operator = SubContent.extend`color: LightGray;`;
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
const DelayedService = SubContent.extend`
  color: red;
  font-weight: bold;
`;
const OnTimeService = SubContent.extend`color: green;`;

class TrainContainer extends Component {
  onTimeCalculator = () => {
    let service = this.props.service;
    let realTime = service.realTimeUpdatesInfo.realTimeServiceInfo.realTime.substr(
      11,
      5
    );
    let scheduledTime = service.scheduledInfo.scheduledTime.substr(11, 5);
    if (service.realTimeUpdatesInfo.realTimeServiceInfo === undefined || realTime === "00:00") {
      if (service.realTimeUpdatesInfo.delayReason !== undefined) {
        return <DelayedService>Delayed</DelayedService>;
      }
      console.error(
        "There was no realTimeUpdatesInfo returned for service: " +
          service.serviceIdentifier
      );
      return <DelayedService>No ETA</DelayedService>;
    }
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
          <header>{this.props.service.destinationList[0].crs}</header>
          <Operator>{this.props.service.serviceOperator}</Operator>
        </DestinationOperatorWrapper>
        <PlatAndOnTimeWrapper>
          <div>Plat. {this.props.service.scheduledInfo.scheduledPlatform}</div>
          <div>{this.onTimeCalculator()}</div>
        </PlatAndOnTimeWrapper>
        <ButtonWrapper onClick = {() => this.props.handleClickOnService(this.props.service.serviceIdentifier)} name={'Click here for the ' + this.props.service.scheduledInfo.scheduledTime.substr(11, 5) + ' to ' + this.props.service.destinationList[0].crs}>
          <Arrow />
        </ButtonWrapper>
      </TrainWrapper>
    );
  }
}

export default TrainContainer;
