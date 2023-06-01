import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import Food from './components/Food';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodDb, setFoodDb] = useState(foods);

  //this function gets passed as a prop to where we want to call it
  //in this case we want to call it in the form component 
  const addFoodDb = (newFood) => {
    const newFoodList = [...foodDb, newFood];

    setFoodDb(newFoodList);
  };

  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <AddFoodForm addFood={addFoodDb} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodDb.map((food) => (
          <FoodBox key={food.name} food={food} />
        ))}
      </Row>
    </div>
  );
}
export default App;
