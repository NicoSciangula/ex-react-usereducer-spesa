import CardList from "./CardList";
import { useState } from "react";

export default function ListItem() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProduct, setAddedProduct] = useState([]);

  const addToCart = (item) => {
    setAddedProduct((curr) => {
      const isAlreadyAdded = curr.some((p) => p.name === item.name);
      if (isAlreadyAdded) {
        return curr.map((p) => (p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p));
      }

      return [...curr, { ...item, quantity: 1 }];
    });
  };

  const totalCart = addedProduct.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const deleteProductCart = (item) => {
    setAddedProduct((curr) => {
      const haveQnt = curr.find((p) => p.name === item.name);
      if (!haveQnt) return curr;

      if (haveQnt.quantity > 1) {
        return curr.map((p) => (p.name === item.name ? { ...p, quantity: p.quantity - 1 } : p));
      }

      return curr.filter((p) => p.name !== item.name);
    });
  };
  return (
    <>
      <div className="d-flex justify-content-around">
        <div>
          <ul className="list-unstyled pt-2 flex-wrap d-flex justify-content-center">
            {products.map((product, i) => (
              <li key={i} className="p-2">
                <CardList product={product} addProduct={addToCart} />
              </li>
            ))}
          </ul>
        </div>
        {addedProduct.length > 0 ? (
          <div className="d-flex my-cart flex-column">
            <h2>Carrello</h2>
            <div>
              <ul className="list-unstyled">
                {addedProduct.map((item, i) => (
                  <li key={i} className="d-flex justify-content-between pb-2">
                    <div>
                      {item.name}: {item.price.toFixed(2)}€{" "}
                      <button className="delete-btn" onClick={() => deleteProductCart(item)}>
                        X
                      </button>
                    </div>
                    <span>{`Qnt: ${item.quantity}`}</span>
                  </li>
                ))}
              </ul>
              <div>
                <b>Totale:</b> {totalCart.toFixed(2)}€
              </div>
            </div>
          </div>
        ) : (
          <h2>Il carrello è vuoto</h2>
        )}
      </div>
    </>
  );
}
