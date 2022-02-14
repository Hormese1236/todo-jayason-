import React, { Component } from 'react'

export default class Togglebutton extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isloggedin:true,
    class:"btn btn-success",
    task:"not completed"
    }
    console.log(props.value)
  }
  componentDidMount(){
  if(this.props.value==='notStarted'){
    this.setState({isloggedin:false})
    this.setState({class:"btn btn-danger"})
    this.setState({task:"not completed"})

    
  }
  else {
    this.setState({isloggedin:true})
    this.setState({task:"completed"})

 
    
  } 
}
  render() {
    return (

      <div><button disabled={this.state.isloggedin} class={this.state.class} >{this.state.task}</button></div>
    )
    
  }
 
}
// import React from "react";

// // import "./Toggleswitch.css";
  
// const ToggleSwitch = ({ label },value) => {

//  console.log(value.value)
  
//   return (


//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input disabled ={true} type="checkbox" className="checkbox" 
//                name={label} id={label} />
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };
  
// export default ToggleSwitch;

   
 





