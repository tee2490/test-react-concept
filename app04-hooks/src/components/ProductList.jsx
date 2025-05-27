import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    // fetch("http://localhost:8000/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));

    axios.get("http://localhost:8000/products").then((response) => {
      console.log(response);
      setProducts(response.data);
    }).catch((error) => {
      console.error("Error fetching products:", error);
    });
  }, []);

  return     <section>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>

}
