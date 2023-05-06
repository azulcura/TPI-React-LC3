import PizzaItem from "../PizzaItem/PizzaItem";

const Pizza = ({ pizza }) => {
    return (
      <>
        <PizzaItem
          title={pizza[0].title}
          description={pizza[0].description}
          prize={pizza[0].prize}
          imagen={pizza[0].imagen}

        />
        <PizzaItem
          title={pizza[1].title}
          description={pizza[1].description}
          prize={pizza[1].prize}
          imagen={pizza[1].imagen}
        />
        <PizzaItem
          title={pizza[2].title}
          description={pizza[2].description}
          prize={pizza[2].prize}
          imagen={pizza[2].imagen}
        />
        <PizzaItem
          title={pizza[3].title}
          description={pizza[3].description}
          prize={pizza[3].prize}
          imagen={pizza[3].imagen}
        />
        <PizzaItem
          title={pizza[4].title}
          description={pizza[4].description}
          prize={pizza[4].prize}
          imagen={pizza[4].imagen}
        />
        <PizzaItem
          title={pizza[5].title}
          description={pizza[5].description}
          prize={pizza[5].prize}
          imagen={pizza[5].imagen}
        />
        <PizzaItem
          title={pizza[6].title}
          description={pizza[6].description}
          prize={pizza[6].prize}
          imagen={pizza[6].imagen}
        />
      </>
    );
  }
  export default Pizza;