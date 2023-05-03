
import Portada from './img/Portada.png'
import './App.css'
import Pizza from './Components/Pizza/Pizza';
import Pizzas from './Constant';

function App() {

  return (
  <div className='All-App'>
      <div>
        <header className='Top'>
        <a className='Logo'>
          <img src={Portada} className="logo react" alt="React logo" />
        </a>
        </header>
      </div>
      <body>
      <div className='App'>
      <Pizza pizza = {Pizzas}/>
      </div>
      </body>
      <footer className='footer'>
        <h3>Callao 142</h3>
        <h3>3416691492</h3>
        <h3>Buscanos en redes!</h3>
        <h3>Marcello & Santino</h3>
      </footer>
  </div>
  );
}

export default App
