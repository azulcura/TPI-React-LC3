import { AddToCart } from "../AddToCart/AddToCart";
import "./PizzaItem.css";

const PizzaItem = ({ title, description, prize, imagen}) => {
    return (
      <div className="pizza-item-container">
        <img src = {imagen} className="size" />
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>${prize}</h3>
        <AddToCart/>
      </div>
    );
  };
  export default PizzaItem;