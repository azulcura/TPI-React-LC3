
import Logo from './img/Logo.png'
import LogoPizza from './img/LogoPizza.png'
import './App.css'
import Pizza from './Components/Pizza/Pizza';
import Pizzas from './Constant';

function App() {

  return (
  <div className='All-App'>
        <header className='Top'>
        <a className='Logo'>
          <img src={Logo} className="logo react" alt="React logo" />
        </a>
        <nav>
            <ul className='List-Header'>
                <li>Home</li>
                <li>Nuestra historia</li>
                <li>HOLA</li>
            </ul>
        </nav>
        </header>
      <body>
        <div className='App'>
        <Pizza pizza = {Pizzas}/>
        </div>
      </body>
      <footer className='footer'>
      <img src={LogoPizza} className="logo-emoji" alt="React logo" />
      <nav>
        <ul>
          <li><h1>Callao 142</h1></li>
          <li><a href = "https://wa.me/543416691492" target='_blank'>3416691492 </a></li>
          
          <li>Buscanos en redes!</li>
          <li><a href = "https://instagram.com/marcelloysantino?igshid=ZDdkNTZiNTM=" target='_blue'> Marcello & Santino</a></li>
        </ul>
      </nav>
      </footer>
  </div>
  );
}

export default App
