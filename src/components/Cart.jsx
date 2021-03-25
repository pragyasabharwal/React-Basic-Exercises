import { useState } from "react";

export function Cart() {
  const [itemsInCart, setItemsInCart] = useState([
    {
      name: "Papaya",
      qty: 0,
      id: 1
    },
    {
      name: "Mango",
      qty: 1,
      id: 2
    }
  ]);

  function cartHandler(id) {
    setItemsInCart((old) =>
      old.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      })
    );
  }

  function ProductListing() {
    return itemsInCart.map(({ name, qty, id }) => (
      <div style={{ margin: "2em" }}>
        {name} <button onClick={() => cartHandler(id)}> Add </button>
      </div>
    ));
  }

  function incQuantity(id) {
    setItemsInCart((old) =>
      old.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      })
    );
  }

  function decQuantity(id) {
    setItemsInCart((old) =>
      old.map((item) => {
        if (item.id === id && item.qty > 0) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
    );
  }

  function Cart() {
    return itemsInCart.map(({ name, qty, id }) => (
      <div>
        {name}
        <button style={{ margin: "1em" }} onClick={() => incQuantity(id)}>
          +
        </button>
        {qty}
        <button style={{ margin: "1em" }} onClick={() => decQuantity(id)}>
          -
        </button>
      </div>
    ));
  }

  return (
    <div className="App">
      <h1>Cart</h1>
      <ProductListing />
      <h2> Cart </h2>
      <Cart />
    </div>
  );
}
