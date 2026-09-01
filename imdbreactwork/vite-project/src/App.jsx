import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './component/Card'
import Cardgallery from './component/Cardgallery'

function App() {

  return (
    <div>
      <Card />
      <Cardgallery />
    </div>
  )
}

export default App
