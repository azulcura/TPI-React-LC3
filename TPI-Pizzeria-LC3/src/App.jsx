
import Logo from './img/Logo.png'
import './App.css'
import Pizza from './Components/Pizza/Pizza';
import Footer from './Components/Footer/Footer';
import Pizzas from './Constant';

function App() {

  return (
  <div className='All-App'>
        <header className='Top'>
        <nav>
            <ul className='List-Header'>
                <li>Home</li>
                <li>Nuestra historia</li>
                <li>HOLA</li>
                <li>Usuario<input/></li>
                <li>Contraseña<input/></li>
                <button>Registrarse</button>
            </ul>
            <a className='Logo'>
              <img src={Logo} className="logo react" alt="React logo" />
            </a>
        </nav>
        
        
        </header>
      <body>
        <div className='App'>
        <Pizza pizza = {Pizzas}/>
        </div>
      </body>
      <footer className='footer'>
      <nav>
        <Footer/>
      </nav>
      </footer>
  </div>
  );
}

export default App
