"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-bold text-white">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="flex items-center space-x-4">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 object-cover"
            />
            <span className="text-white">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
