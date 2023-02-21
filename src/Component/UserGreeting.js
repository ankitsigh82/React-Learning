import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render() {
   return this.state.isLoggedIn && <div>Welcome AR</div>
    }
      //return this.state.isLoggedIn ? (
       // <div>welcome ankit rathore</div>
       // ) : (
         // <div>welocme AR</div>
       // )

     //let Message
    // if (this.state.isLoggedIn){
     // message = <div>welcome ankitsa</div>

    // }else{
     // message=<div>welcome AR</div>
     //}


       // if(this.state.isLoggedIn){
        // return<div>welcome ankit</div>
        //} else {
          //  return<div>welcome guest</div>
         //}   
        //}
    //}


 // render() {
  //  return (
  //      <div>
   //   <div>UserGreeting</div>
 //     <div>welcome</div>
   //   </div>
   // )
  //}
  }

export default UserGreeting