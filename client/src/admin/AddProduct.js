import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct } from "./apiAdmin";

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    shipping: "",
    quantity: "",
    photo: "",
    loading: false,
    error: "",
    createdProduct: "",
    redirectToProfile: false,
    formData: ""
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,

    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values;

  return (
    <Layout title="Add a new product" description={`Hello ${user.name}`}>
      <div className="row">
        <div className="col-md-8 offset-md-2">text</div>
      </div>
    </Layout>
  );
};

export default AddProduct;
