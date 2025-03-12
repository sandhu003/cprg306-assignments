"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
export default function Page() {
   const [items, setItems] = useState(itemsData);
   

    const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
    };
    return (
        <main className=" bg-black p-8 ">
            <div>
            <h1 className="text-2xl font-bold mb-4 text-center text-white">
              My Shopping List
            </h1>
            </div>
            <div className=" p-4  border-gray-200 ">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
      </div>
        </main>
    );
}
