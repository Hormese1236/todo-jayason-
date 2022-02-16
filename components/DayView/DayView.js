import React from "react";
import styled from "styled-components";

const DayViewList = styled.div`
  padding: 1.5rem;
  margin: 1rem;
  border-bottom: $mid-grey 1px solid;
  background-color: $white;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const DayViewTime = styled.div`
  font-size: 1rem;
  width: 10%;
`;

const DayViewTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: $screen-black;
  width: 25%;
  text-align: left;
`;

const DayViewDescription = styled.div`
  font-size: 0.875rem;
  width: 40%;
`;

const DayViewLink = styled.div`
  font-size: 0.875rem;
  width: 15%;
  text-align: right;
`;

const DayView = (props) => {
  const { time, subject, bodyPreview } = props;
  return (
    <DayViewList>
      <DayViewTime>{time}</DayViewTime>
      <DayViewTitle>
        <span>{subject}</span>
      </DayViewTitle>
      <DayViewDescription>{bodyPreview}</DayViewDescription>
      <DayViewLink>
        <a href="#">Learn More</a>
      </DayViewLink>
    </DayViewList>
  );
};

export default DayView;
