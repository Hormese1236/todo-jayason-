import React, { Fragment } from "react";
import styled from "styled-components";

import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

import Togglebutton from "./ToggleSwitch";
import ToggleSwitch from "./ToggleSwitch";

import mypic2 from '../public/mypic2.png';
import Agenda from "./Agenda";

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



    <div>
   
    <Container className="wholediv">
      
    <Row>
   
    
      
    <Col>
    <br></br>
      {tasks.map((task) => (




        <Card key={task.id} className="whole">
         
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
                 <ToggleSwitch  Name='newsletter'   value={task.status}/> 
        
            <br></br>
         
          <p>
            <strong>Created DateTime: </strong> {task.createdDateTime}
          </p>
         
        </Card>
        
      ))}
  </Col>
  
  
  </Row>
  <div className="imageContainer">
  <Image className="img" width="400" height="500" src={mypic2} />
 
  </div>
      </Container>
      
    
     
      
        
       
      
     
    
     
   
    
   
      {/* <Agenda/> */}
      </div>
       
  );
};
