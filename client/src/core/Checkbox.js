import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from "./apiCore";

const Checkbox = ({ categories }) => {
  return categories.map((item, index) => {
    return (
      <li className="list-unstyled" key={index}>
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">{item.name}</label>
      </li>
    );
  });
};

export default Checkbox;
