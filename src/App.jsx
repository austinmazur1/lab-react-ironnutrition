import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import Food from "./components/Food";

function App () {
  const [foodDb, setFoodDb] = useState(foods)
  return (
  <div className="App">
    {foodDb.map((foods) => (
      <Food key={foods.name} foods={foods}/>
    ))}
  </div>
  ) 
}
export default App;