import React from 'react'
import Person from './Person'

function NameList() {
const names = ['Bruce', 'Clark', 'Diana']
const persons = [
    {
        id:1,
        name:'ankit',
        age : 25,
        skill: 'react'
    },
    {
        id:2,
        name:'ankit rathore',
        age : 29,
        skill: 'react js'
    },
    {
        id:1,
        name:'ankit singh',
        age : 28,
        skill: 'react '
    },
]
const namelist = names.map ((names, index) => <h2 key={index}>{index}{names}</h2>)
    
   return <div> {namelist} </div>
    
}

 export default NameList                                              