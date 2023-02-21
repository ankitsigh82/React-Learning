import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/welcome'
import Hello from './Component/Hello'
import Message from './Component/Meesege'
import Counter from './Component/Counter';
import Functionclick from './Component/Functionclick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind'
import ParentComponent from './Component/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import Stylesheet from './Component/Stylesheet';
import Inline from './Component/Inline';
import  Form from './Component/form';

class App extends Component {
  render() {
    return (
 

      <div className="App">
        <form/>
        {/*<Inline/>
        
        <Stylesheet primary={true}/>

       <NameList />
        <UserGreeting/>

        <ParentComponent/>


        <EventBind />

       <Functionclick />
        <ClassClick />
         <Counter />

/*<Message/>
<Greet name="Bruce" heroname="Batman"/>
<p>This is children prop</p>
 
<Greet name="clark" heroname="superman"/>
<button>Action</button>
 
<Greet name="clark" heroname="Wonder Women"/>
<Greet name="Diana" />

<Welcome name="bruce" heroName="wonder women"/>
<Welcome name="bruce" heroName="wonder women"/>
<Welcome name="bruce" heroName="wonder women"/>
<Hello /> 
        <Greet name="Diana" heroName="wonder women" />
        <Welcome name="Bruce" heroName="Batman" />*/}

        <Form />
      </div>


    )
  }
}

export default App;
