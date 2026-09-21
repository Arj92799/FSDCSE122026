import React,{useEffect,useState} from 'react'

function UseEffect() {
    const[counter,setCounter]=useState(0)
    const[pointer,setPointer]=useState(1000)
    useEffect(()=>{
        console.log("Heyy...using useEffect hook,count="+counter)
    },[counter])
  return (
    <div>
      <h2 style={{color:'red'}}>count={counter}</h2>
      <h2 style={{color:'green'}}>pointer={pointer}</h2>
      UseEffect
      <button onClick={()=>setCounter(counter+10)}>Counter</button>
    </div>
  )
}

export default UseEffect
