import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import Food from './components/Food';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodDb, setFoodDb] = useState(foods);
  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

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
