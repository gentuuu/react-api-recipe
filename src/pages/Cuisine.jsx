import React from 'react';
import './Cuisine.css';
import { motion } from 'framer-motion';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div className='Grid'>
      {cuisine.map((item) => {
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


export default Cuisine