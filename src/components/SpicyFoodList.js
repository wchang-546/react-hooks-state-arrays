import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const foodsToShow = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy
    }
    })
    
  function filterFood(e){
    setFilterBy(e.target.value)
  }
  
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)

  }

  const foodList = foodsToShow.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleLiClick(id){
    const newFoodSpice = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food, heatLevel: food.heatLevel + 1
        }
      } else {
        return food
      }
    }) 
  
    setFoods(newFoodSpice)  
  }


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

        <select name="filter" onChange={filterFood}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
</select>

    </div>
  );
}

export default SpicyFoodList;
