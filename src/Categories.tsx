import React from "react";


type CategoriesProps = {
  categories: string[],
  filterByCategory: (category: string) => void,
  activeCategory: string
}

const Categories: React.FC<CategoriesProps> = ({ categories, filterByCategory, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            className={`filter-btn ${
              item === activeCategory ? "active-btn" : null
            }`}
            key={index}
            onClick={() => filterByCategory(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
