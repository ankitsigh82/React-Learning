import React from 'react'

 function Functionclick() {
    function ClickHandler() {
     console.log('Button clicked') 
    }  
    return (
        <div>
             <button onClick={ClickHandler}>Click</button>
         </div>
     )
    }

    export default Functionclick;


