import React from 'react'
import ICard from './ICard'

function Gallery() {
    const student=[{
        
        name:"Aditya",
        roll:'989898',
        branch:'CSE-AIML',
        college:'ABES Engineering college'
    },
    {
     name:"Avinash",
        roll:'98989874',
        branch:'CSE-AIML',
        college:'ABES Engineering college'
    },
     
    {
     name:"Ram",
        roll:'989898',
        branch:'CSE-AIML',
        college:'ABES Engineering college'
    }
]
  return (
    <div style={{border:'2px solid black',display:'flex'}}>
        {/* <ICard name="Aditya" roll={2400320100086} branch="CSE12" college="ABESEC"/>
        <ICard name="John" roll={2400320100087} branch="CSE12" college="ABESEC"/>
        <ICard name="Jane" roll={2400320100088} branch="CSE12" college="ABESEC"/>
        <ICard name="Bob" roll={2400320100089} branch="CSE12" college="ABESEC"/> */}
        {/* <ICard data={student[1]}/> */}
    {
        student.map((ele)=>(
            <div>
                <ICard data={ele}/>
            </div>      
        ))
    }
    </div>
  )
}

export default Gallery
