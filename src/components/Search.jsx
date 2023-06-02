import { Divider, Input } from 'antd';

//filter function as prop from app 
const Search = ({ filterFoods, filteredFoods }) => {
    return (
        <>
          <Divider>Search</Divider>
    

          <Input value={undefined} type="text" onChange={(e) => filterFoods(e)} />
        </>
      );
}

export default Search
