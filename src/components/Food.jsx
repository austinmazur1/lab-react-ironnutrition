

const Food = ({ foods }) => {
  return (
    <div>
      <p>{foods.name}</p>
      <img src={foods.image} alt={foods.name} width={300}/>
    </div>
  )
}

export default Food
