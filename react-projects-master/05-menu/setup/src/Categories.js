import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
// manually setup each button to filter thru each category // or use the method show above

// return (
//   <div className="btn-container">
//     <button className="filter-btn" onClick={() => filterItems("breakfast")}>
//       breakfast
//     </button>
//     <button className="filter-btn" onClick={() => filterItems("all")}>
//       all
//     </button>
//   </div>
// );

export default Categories;
