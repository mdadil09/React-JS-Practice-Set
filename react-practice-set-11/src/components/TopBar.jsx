import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./style.css";

function TopBar() {
  const {
    state: { includeOutOfStock, includefastDelivery, search },
    dispatch,
  } = useContext(ProductContext);

  const handldSearchChange = (e) => {
    const selectedInput = e.target.value;
    dispatch({ type: "SEARCH_BY_NAME", payload: selectedInput });
  };

  const handleChange = (e) => {
    const selectedInput = e.target.value;
    dispatch({ type: "SORT_METHOD", payload: selectedInput });
  };

  return (
    <>
      <div className="searchField">
        <input
          type="search"
          placeholder="Search by name"
          onChange={(e) => handldSearchChange(e)}
        />
        <button>Search Data</button>
      </div>
      <div className="sort-method">
        <h3>Sort By:</h3>
        <input
          type="radio"
          name="sort"
          id="descd"
          value="desc"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="ascd">Price - High to Low</label>
        <input
          type="radio"
          name="sort"
          id=" ascd"
          value="asc"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="descd">Price - Low to High</label>
      </div>
      <div className="filters">
        <h3>Filters: </h3>
        <input
          type="checkbox"
          name="sort"
          value="out-of-stock"
          checked={includeOutOfStock}
          onChange={(e) => dispatch({ type: "OUT_OF_STOCK" })}
        />
        <label htmlFor="">Include Out Of Stock</label>
        <input
          type="checkbox"
          name="sort"
          value="fast-delivery"
          checked={includefastDelivery}
          onChange={(e) => dispatch({ type: "FAST_DELIVERY" })}
        />
        <label htmlFor="">Fast Delivery</label>
      </div>
    </>
  );
}

export default TopBar;
