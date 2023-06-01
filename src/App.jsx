import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import Food from "./components/Food";
import FoodBox from "./components/FoodBox";

function App () {
  const [foodDb, setFoodDb] = useState(foods)
  return (
  <div className="App">
    {foodDb.map((foods) => (
      <Food key={foods.name} foods={foods}/>
    ))}
    <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    
  </div>
  ) 
}
export default App;