"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (name) => {
    // Clean up item name by removing size and emoji
    const cleanedName = name.replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black p-8">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          My Shopping List
        </h1>
      </div>
      <div className="flex space-x-8">
        {/* Shopping List Section */}
        <div className="flex-1 p-4 border-gray-200">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Meal Ideas Section */}
        <div className="flex-1 p-4 border-gray-200">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
