import React, { useState } from 'react'
import cat2 from '../images/cat2.png'

function Imagemanipulation() {

    const [height, setHeight] = useState(200)
    const [width, setWidth] = useState(200)

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const [angle, setAngle] = useState(0)

    function EnhanceHeight() {
        setHeight(height + 20)
    }

    function DecreaseHeight() {
        setHeight(height - 20)
    }

    function EnhanceWidth() {
        setWidth(width + 20)
    }

    function DecreaseWidth() {
        setWidth(width - 20)
    }

    function ChangeBgColour() {
        setRed(Math.floor(Math.random() * 256))
        setGreen(Math.floor(Math.random() * 256))
        setBlue(Math.floor(Math.random() * 256))
    }

    function Rotate() {
        setAngle(angle + 45)
    }

    return (
        <div>

            <h2 style={{
                color: 'white',
                backgroundColor: 'brown'
            }}>
                Image Manipulation Using React
            </h2>

            {/* Fixed container */}
            <div style={{
                border: '2px solid red',
                height: '300px',
                width: '400px',
                marginLeft: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}>

                
                <img
                    src={cat2}
                    height={height}
                    width={width}
                    style={{
                        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                        transform: `rotate(${angle}deg)`
                    }}
                />

            </div>

            <h2>Cat Height: {height}</h2>
            <h2>Cat Width: {width}</h2>

            <button onClick={EnhanceHeight}>
                Enhance Height
            </button>

            <button onClick={DecreaseHeight}>
                Decrease Height
            </button>

            <button onClick={EnhanceWidth}>
                Enhance Width
            </button>

            <button onClick={DecreaseWidth}>
                Decrease Width
            </button>

            <button onClick={ChangeBgColour}>
                Change Background Colour
            </button>

            <button onClick={Rotate}>
                Rotate
            </button>

        </div>
    )
}

export default Imagemanipulation