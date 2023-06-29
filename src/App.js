import React, { useState } from "react";
import "./styles.css";

const list = ["apple", "boy", "cat", "dog", "elephant", "fish", "goat"];

export default function App() {
  const [filterData, setFilterData] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterData(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterData(filteredValues);
  };

  return (
    <div className="App">
      Search: <input name="query" type="text" onChange={handleSearch} />
      <ul>
        {filterData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
