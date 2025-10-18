// src/components/App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import initialItems from "../data/items";

function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(searchTerm) {
    setSearch(searchTerm);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ShoppingList
        items={items}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
