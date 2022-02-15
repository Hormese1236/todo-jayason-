// import  { Component } from 'react'

// export default class Togglebutton extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isloggedin:true,
//     class:"btn btn-success",
//     task:"not completed"
//     }
//     console.log(props.value)
//   }
//   componentDidMount(){
//   if(this.props.value==='notStarted'){
//     this.setState({isloggedin:false})
//     this.setState({class:"btn btn-danger"})
//     this.setState({task:"pending"})

    
//   }
//   else {
//     this.setState({isloggedin:true})
//     this.setState({task:"completed"})

 
    
//   } 
// }
//   render() {
//     return (

//       <div><button disabled={this.state.isloggedin} class={this.state.class} >{this.state.task}</button></div>
//     )
    
//   }
 
// }
import  { Component } from 'react'

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isloggedin:false,
       checked:true
    }
  }
    componentDidMount(){
   if(this.props.value==='notStarted'){
     this.setState({isloggedin:true})
    
     this.setState({checked:false})
   }   else {
    this.setState({isloggedin:false})
    this.setState({checked:true})

 
    
  } 

   }

  render() {
    return (
      <div><h6>Mark as Done</h6> <input  disabled={this.state.isloggedin}   type="checkbox" name="checkbox" class="cm-toggle green" checked={this.state.checked}  /> 
     
  </div>
    )
  }
}




