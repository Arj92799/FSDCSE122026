import React,{useState} from 'react'
import cat from '../images/cat.jpg'

function Imagemanipulation() {
    const[height,setHeight]=useState(200);
    const[width,setWidth]=useState(200);
    const[red,setRed]=useState(0)
    const[green,setGreen]=useState(0)
    const[blue,setBlue]=useState(0)
    function EnhanceHeight(){
        setHeight(height+20)
    }
    function DecreaseHeight(){
        setHeight(height-20)
    }
    function EnhanceWidth(){
        setWidth(width+20)
    }
    function DecreaseWidth(){
        setWidth(width-20)
    }
  return (
    <div>
     <h2 style={{color:'white',backgroundColor:'brown'}}>Image Manipulation Using react</h2>
     <div style={{border:'2px solid red',height:'300px',width:'400px',marginLeft:'300px'}}>
      <img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}} ></img>
      <div>
        <h2>Cat Height:{height}</h2>
        <h2>Cat Width:{width}</h2>
      </div>
         
     </div>
     <div>

     </div>
     <button onClick={EnhanceHeight}>Enhance Height</button>
     <button onClick={EnhanceWidth}>Enhance Width</button>
        <button onClick={DecreaseHeight}>Decrease Height</button>
        <button onClick={DecreaseWidth}>Decrease Width</button>
    </div>
  )
}

export default Imagemanipulation
