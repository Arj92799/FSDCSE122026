import React from 'react'
import pic from '../images/imgg.jpg'

function ICard() {
    let a=7;
  let name="Aditya";
  let roll=2400320100086;
  let branch="CSE12";
  let college="ABESEC"
  return (
    <div>
        
        <p>Welcome to react using Vite</p>
        <h2 style={{color:"red",background:"yellow"}}>Value of a is={a}</h2>
    <div style={{border:'2px solid black',height:'450px',width:'250px'}}>
        <img src={pic} height={200} width={200} style={{borderRadius:'50%'}}></img>
        <h2>Name:{name}</h2>
        <h2>Roll:{roll}</h2>
        <h2>Branch:{branch}</h2>
        <h2>College:{college}</h2>

      </div>
      </div>
  )
}

export default ICard
