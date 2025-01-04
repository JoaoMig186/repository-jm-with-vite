import React, { useState } from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilterChange, numberOfProjects }) => {

  const [activeFilter, setActiveFilter] = useState("all");
console.log("numProjects: ", numberOfProjects)
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-bar">
      {[`Todos (${numberOfProjects})`, "React", "HTML", "CSS", "Javascript"].map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;