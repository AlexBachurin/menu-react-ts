import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { IMenuItem } from "./models";

const App = () => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>(items);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  //get unique categories of items
  const getUniqCategories = () => {
    const categoriesMap = items.map((item) => {
      return item.category;
    });
    //use set to exclude duplicates in categories
    //also transform right away to array and add all category
    const categoriesSet = ["all", ...new Set(categoriesMap)];
    setCategories(categoriesSet);
  };

  //display items based on clicked category
  const filterByCategory = (category : string) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => {
        return item.category === category;
      });
      setMenuItems(newItems);
    }
    //set current active category on click
    setActiveCategory(category);
  };

  //get categories on page load
  useEffect(() => {
    getUniqCategories();
  }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterByCategory={filterByCategory}
          activeCategory={activeCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
