import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="Home Page"
      description="Node React E-Commerce App"
      className="container-fluid"
    >
      <h2 className="mb-4"> Best Sellers</h2>
      <div className="row">
        {productsBySell.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
      <h2 className="mb-4"> New Arrivals </h2>
      <div className="row">
        {productsByArrival.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
