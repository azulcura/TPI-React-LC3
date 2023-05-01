const PizzaItem = ({ title, description, prize}) => {
    return (
      <div className="pizza-item-container">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{prize}</h3>
      </div>
    );
  };
  export default PizzaItem;