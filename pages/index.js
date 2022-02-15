import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../components/SignInButton";
import { SignOutButton } from "../components/SignOutButton";
import { TaskList } from "../components/TaskList";
import { callMsGraph, callMsGraphTodoTaskList } from "./api/graph";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../utils/authConfig";
import styled from "styled-components";
// import { Container } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {Agenda} from "../components/Agenda"




import mypic from '../public/mypic.png';




export default function Home() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [taskData, setTaskData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestAccessToken() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        setAccessToken(response.accessToken);
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          setAccessToken(response.accessToken);
        });
      });
  }

  function RequestTodoTaskList(taskId) {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraphTodoTaskList(response.accessToken, taskId).then(
          (response) => {
            setTaskData(response.value);
          }
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) => {
            setGraphData(response);
          });
        });
      });
  }

  function RequestTaskData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          const taskId = response.value[0].id;
          RequestTodoTaskList(taskId);
        });
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) => {
            setGraphData(response);
          });
        });
      });
  }


  return (
    <div className={styles.container}>
       {/* <Image className="img" src={mypic}></Image> */}
   {/* <Container>
     <Row>
       <Col sm={5}></Col>
       <Col>
      <Image className="img" src={mypic}></Image>
      </Col>
      </Row>
      </Container> */}
    <Container>
      
     
      
<div className="content">

      <main className={styles.main}>
      <h1>Todo</h1>
      <br></br>
        <p>{isAuthenticated ? <SignOutButton /> : <SignInButton />}</p>
        <p>
          {isAuthenticated ? (
            <p>Access Token Acquired!</p>
            
          ) : (
            <button onClick={RequestAccessToken} class="btn btn-primary">Request Access Token</button>
          )}
        </p>
        <p>
      
          {taskData ? (
            <TaskList tasks={taskData} />
          ) : (
            <button onClick={RequestTaskData} class="btn btn-primary" >Get Task List</button>
          )}
        </p>
       </main>

     

    </div>
    
    
    

  
   
   
   
      
    
   
    </Container>
    
    
    </div>
  );
}
