import React from "react";
import styled from "styled-components";
// import { Button } from "bootstrap";
import Togglebutton from "./Togglebutton";

const Title = styled.h2`
  font-size: 20px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
   margin-bottom: 20px;
   
`;


export const TaskList = (props) => {
  const { tasks } = props;



  return (



    <>
      {tasks.map((task) => (





        <Card key={task.id}>
          <p>
            <Title>{task.title}</Title>
          </p>
      
          <p>
            <strong>Importance: </strong> {task.importance}
            </p>
            {task.importance=='high' &&
            <button type="button" className="btn btn-danger btn-lg px-4 gap-3">
              High priority
            </button>}
              
             
          <p>
         
            <strong>Status: </strong> {task.status}
            </p>
               {/* { task.status="completed"&&<Togglebutton disabled={task.status==='completed'}/>}
        */}
      
            <br></br>
         
          <p>
            <strong>Created DateTime: </strong> {task.createdDateTime}
          </p>
        </Card>
      ))}
    </>
  );
};
