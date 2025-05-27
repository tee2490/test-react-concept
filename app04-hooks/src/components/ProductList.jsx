import React, { useEffect, useState,useCallback } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [counter, setCounter] = useState(0);

  const fetchProducts =useCallback(async () => {
    const response = await axios.get(url);
    response.data && setProducts(response.data);
}, [url]);

useEffect(() => {
    fetchProducts();
    console.log("-");
}, [fetchProducts]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock Only
        </button>
      </div>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span
              className={product.in_stock == "true" ? "instock" : "unavailable"}
            >
              {product.in_stock == "true" ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
}
