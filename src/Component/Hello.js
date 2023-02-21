import React from 'react'

const Hello = () => {
   // return(
     //   <div>
       //    <h1>Hello ankit</h1> 
        //</div>
    //)
    return React.createElement( 'div', null, React.createElement('h2',null,'hello ankit'))

}

export default Hello
