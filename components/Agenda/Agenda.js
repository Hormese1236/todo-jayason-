import React from "react";
import styled from "styled-components";
import agendaData from "../../pages/api/MockData/agendaData";
import DayView from "../DayView/DayView";

const DayViewConatiner = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #a7a8aa;
  background-color: white;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin: 2rem 2rem 0 2rem;
  ul {
    padding-left: 0;
  }
`;

const MainTitle = styled.div`
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.625rem;
  font-weight: bold;
  color: #0d3f5e;
  margin-bottom: 0.625rem;
`;

const Agenda = () => {
  const getTime = (startTime, endTime) => {
    return `${new Date(startTime).toLocaleTimeString("en-US")} -
     ${new Date(endTime).toLocaleTimeString("en-US")}
    `;
  };

  return (
    <DayViewConatiner>
      <MainTitle>Agenda</MainTitle>
      {agendaData.map((agenda, index) => {
        return (
          <DayView
            key={index}
            subject={agenda.subject}
            bodyPreview={agenda.bodyPreview}
            time={getTime(agenda.start.dateTime, agenda.end.dateTime)}
          />
        );
      })}
    </DayViewConatiner>
  );
};

export default Agenda;
