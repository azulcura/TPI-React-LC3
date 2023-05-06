import  './Footer.css'
import LogoPizza from "../../img/LogoPizza.png"

const footer = () => {
  return (
    <div className='footer'>
    <img src={LogoPizza} className="logo-emoji" alt="React logo" />
    <ul>
          <li><h1>Callao 142</h1></li>
          <li><a href = "https://wa.me/543416691492" target='_blank'>3416691492 </a></li>
          <li>Buscanos en redes!</li>
          <li><a href = "https://instagram.com/marcelloysantino?igshid=ZDdkNTZiNTM=" target='_blue'> Marcello & Santino</a></li>
    </ul>

    </div>
  )
}

export default footer