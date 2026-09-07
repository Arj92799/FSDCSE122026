import React,{useState} from 'react'

function ReactHook() {
   const[counter,setCounter]=useState(100);
   function IncreaseCounter(){
    // alert("hi")
    setCounter(counter+10)
   }
   function DecreaseCounter(){
    // alert("hi")
    setCounter(counter-10)
   }
  return (
    <div>
      <h1 style={{color:'brown'}}>React Hook</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={IncreaseCounter}>Increase counter value</button>
      <button onClick={DecreaseCounter}>decrease counter value</button>
      
    </div>
  )
}

export default ReactHook
