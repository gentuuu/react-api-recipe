import './Cuisine.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipies] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipies(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
        console.log(params.search);
      }, [params.search]);
    


  return (
    <div className='Grid'>
      {searchedRecipes.map((item) => {
        return (
        <div className="Grid-card" key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
        </div>
        )
      })}
    </div>
  )
}

export default Searched