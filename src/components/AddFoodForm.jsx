import { Divider, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    console.log('submit', newFood);
    addFood(newFood);

    setName('');
    setImage('');
    setCalories();
    setServings();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <Input
        value={name}
        type="text"
        onChange={(e) => handleName(e)}
        placeholder="Name"
      />

      <Input
        value={image}
        type="text"
        onChange={(e) => handleImage(e)}
        placeholder="Image"
      />

      <Input
        value={calories}
        type="number"
        onChange={(e) => handleCalories(e)}
        placeholder="Calories"
      />

      <Input
        value={servings}
        type="number"
        onChange={(e) => handleServings(e)}
        placeholder="Servings"
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
