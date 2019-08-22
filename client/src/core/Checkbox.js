import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories } from "./apiCore";

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = c => () => {
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }

    console.log(newCheckedCategoryId);
    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId);
  };

  return categories.map((item, index) => {
    return (
      <li className="list-unstyled" key={index}>
        <input
          onChange={handleToggle(item._id)}
          value={checked.indexOf(item._id === -1)}
          type="checkbox"
          className="form-check-input"
        />
        <label className="form-check-label">{item.name}</label>
      </li>
    );
  });
};

export default Checkbox;
