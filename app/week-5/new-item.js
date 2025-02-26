"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (amount) => setQuantity((prev) => prev + amount);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, category, quantity };
    console.log(item);
    alert(`Item added\nName: ${name}\nCategory: ${category}\nQuantity: ${quantity}`);
    setName("");
    setCategory("produce");
    setQuantity(1);
  };
  return (
    <div className="p-20 bg-amber-500 rounded-xl shadow-lg text-center border border-amber-700">
      <p className="text-2xl font-semibold mb-5 text-white">Add new item</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xl font-semibold mb-5 text-white">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className=" p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <p className="text-2xl font-semibold mb-5 text-white">Quantity: {quantity}</p>
           <div className="flex justify-center gap-6">
          <button
            onClick={() => updateQuantity(-1)}
            disabled={quantity === 1}
            className="px-5 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50 shadow-md hover:bg-red-700"
            type="button"
          >
            -
          </button>
          <button
            onClick={() => updateQuantity(1)}
            disabled={quantity === 20}
            className="px-5 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50 shadow-md hover:bg-green-700"
            type="button"
          >
            +
          </button>
        </div>
        <div>
          <label className="text-xl font-semibold mb-5 text-white">Category:</label>
          <select value={category}  onChange={(event) => setCategory(event.target.value)}
            className=" p-2 border rounded-lg focus:ring focus:ring-blue-300">
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="w-1000 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Add New Item
        </button>
      </form>
    </div>
  );
}