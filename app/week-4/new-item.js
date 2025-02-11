"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (amount) => setQuantity((prev) => prev + amount);

  return (
    <div className="p-6 bg-amber-500 rounded-xl shadow-lg text-center border border-amber-700">
      <p className="text-2xl font-semibold mb-5 text-white">Quantity: {quantity}</p>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => updateQuantity(-1)}
          disabled={quantity === 1}
          className="px-5 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50 shadow-md hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={() => updateQuantity(1)}
          disabled={quantity === 20}
          className="px-5 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50 shadow-md hover:bg-green-700"
        >
          +
        </button>
      </div>
    </div>
  );
}