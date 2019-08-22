import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getCategories } from "./apiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const searchSubmit = () => {};

  const handleChange = name => event => {};

  const searchForm = () => {
    return (
      <form onSubmit={searchSubmit}>
        <span className="input-group-text">
          {" "}
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <select className="btn mr-2" onChange={handleChange("category")}>
                <option value="All">Pick Category</option>
                {categories.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {" "}
                      {item.name}{" "}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="search"
              className="form-control"
              onChange={handleChange("search")}
              placeholder="search by name"
            />
          </div>
          <div className="btn input-group-prepend" style={{ border: "none" }}>
            <button className="input-group-text"> Search</button>
          </div>
        </span>
      </form>
    );
  };

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  return (
    <div className="row">
      <div className="container mb-3"> {searchForm()}</div>
    </div>
  );
};

export default Search;
