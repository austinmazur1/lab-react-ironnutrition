import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import Food from './components/Food';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodDb, setFoodDb] = useState(foods);
  const [showForm, setShowForm] = useState(false)
  const [filteredFoods, setFilteredFoods] = useState([]);

  
  //onClick calls this function to display or hide the form
  const displayForm = () => {
    setShowForm(!showForm)
  }

  //create this to conditionally update the foods upon search 
  const renderFoodBox = (food) => {
    return (
    <FoodBox key={food.name} food={food} />
    )
  };
  

  //this function gets passed as a prop to where we want to call it
  //in this case we want to call it in the form component 
  const addFoodDb = (newFood) => {
    const newFoodList = [...foodDb, newFood];

    setFoodDb(newFoodList);
  };

  //passed to the search component
  const filterFoods = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = foodDb.filter((food) => 
    food.name.toLowerCase().includes(value)
    );
    setFilteredFoods(filtered)
  };


  return (
    <div className="App">
      <Button onClick={() => displayForm()}> Hide Form / Add New Food </Button>

      {showForm && (<AddFoodForm addFood={addFoodDb} />)}
      <Search filterFoods={filterFoods} />
      <Divider>Food List</Divider>

    <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* {foodDb.map((food) => (
          <FoodBox key={food.name} food={food} filteredFoods={filteredFoods} />
        ))} */}
       {filteredFoods.length > 0
          ? filteredFoods.map(renderFoodBox)
          : foodDb.map(renderFoodBox)}
      </Row>
    </div>
  );
}
export default App;
