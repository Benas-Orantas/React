import "../assets/css/ShoppingCart.css";
import { useState } from "react";

let count = 0;

const ShoppingCart = () => {
  const metaGames = [
    {
      id: 1,
      name: "Oneshot",
      price: 7.31,
      bought: false,
    },
    {
      id: 2,
      name: "Undertale",
      price: 9.99,
      bought: false,
    },
    {
      id: 3,
      name: "Deltarune",
      price: 23.99,
      bought: false,
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    count++;
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="component shopping-cart_component">
      <h3>SHOPPING CART</h3>
      <div className="flex_center flex-n-gap_products">
        <ol>
          {metaGames.map((game) => {
            return (
              <li key={game.id}>
                <div>
                  <p>{game.name}</p>
                  <p>{game.price}€</p>
                </div>
                <button
                  className="shopping-cart_button blue_button"
                  onClick={() => addToCart(game)}
                >
                  Add to cart
                </button>
              </li>
            );
          })}
        </ol>
        <div className="flex_center flex-col">
          <p className="large-text">🛒</p>
          <p>Items: {count}</p>
          <p>Total Price: {totalPrice.toFixed(2)}€</p>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
