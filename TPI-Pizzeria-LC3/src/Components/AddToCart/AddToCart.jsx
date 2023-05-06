import React, { useState } from 'react'
import CarritoLogo from '../../img/CarritoLogo.png'
import './AddToCart.css'

export const AddToCart = () => {
    const [addToCart, setAddToCart] = useState(""); // Order aggregate status

    const [numPizzas, setNumPizzas] = useState(); // Status of the aggregate number of pizzas

    const addCartHandler = (numPizzas) => {   // Function add to cart
        const _Pizzas = [...numPizzas]  
        setAddToCart("Pedido Agregado");  
    }

    const inputChangeHandler = (event) => {
        setNumPizzas (event.target.value);
    }

  return (
    <div className='divAddtocart'>
        <input type='number' onChange={inputChangeHandler}/>
        <button onClick={addCartHandler} className='addtocart'>Agregar al carrito</button>
        <img src={CarritoLogo} className='Cart'/>
    </div>
  )
}
