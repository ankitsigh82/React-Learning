import React , { Component } from 'react'

 class EventBind extends Component {

constructor(props){
    super(props)

    this.state = {
        message:'Hello'
    }
}

clickHandler() {
    //this.setstate({
    // message: 'Goodbye'
    // })
   console.log(this )
}

    render() {
    return (
        <div>
           <div>{this.state.message}</div> 
            {/*<button onclick={this.clickHandler.blclick</button> /*}
        {/*<button onclick={()=> this.clickHandler()}>click</button>*/}

        <button onClick={this.clickHandler.bind()}>Click</button>
        </div>
    )    
    }
}

export default EventBind