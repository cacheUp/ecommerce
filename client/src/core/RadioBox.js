import React, { useState, useEffect, Fragment } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = event => {
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((item, index) => {
    return (
      <div key={index}>
        <input
          name={item}
          onChange={handleChange}
          value={item._id}
          type="radio"
          className="mr-2 ml-4"
        />
        <label className="form-check-label">{item.name}</label>
      </div>
    );
  });
};

export default RadioBox;
