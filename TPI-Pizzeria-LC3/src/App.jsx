import { useState } from 'react'
import Logo from './img/Logo.png'
import './App.css'
import './Constant.js'
import Pizza from './Components/Pizza/Pizza'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Marcello & Santino</h2>
      <div>
        <Pizza Pizza = {pizza} />

      </div>

    </>
  )
}

export default App
