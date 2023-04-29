
import Logo from './img/Logo.png'
import './App.css'
import Pizza from './Components/Pizza/Pizza';
import Pizzas from './Constant';

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Marcello & Santino</h2>
      <div>
      <Pizza pizza = {Pizzas}/>
      </div>

    </>
  )
}

export default App
