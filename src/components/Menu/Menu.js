import React, { useState } from "react";
import SearchField from "react-search-field";
import "./Menu.css";

const Menu = () => {
  const [search, setSearch] = useState("");
  const onChange = (value, event) => {
    setSearch(value);
  };
  return (
    <div className="Menu">
      <div className="Item">
        <li>
          <ul>
            <b>FURNITURE &#709;</b>
          </ul>
          <ul>
            <b>TELEVISION &#709;</b>
          </ul>
          <ul>
            <b>APPLIANCES &#709;</b>
          </ul>
          <ul>
            <b>LAPTOP &#709;</b>
          </ul>
          <ul>
            <b>NEW ARRIVALS &#709;</b>
          </ul>
        </li>
      </div>
      <div className="Search">
        <SearchField
          placeholder="Search from 10,000+ unique products"
          onChange={onChange}
          searchText=""
          classNames="test-class"
        />
      </div>
    </div>
  );
};

export default Menu;
