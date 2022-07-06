import React from 'react';
import { useEffect, useState,  } from 'react';
import './Veggie.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[]);

    const getVeggie = async () =>{

        const check = localStorage.getItem("popular");

        if (check){
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data);
        }


    };



    return (
        <div className='Wrapper'>
        <h3>Popularne przepisy wegańskie:</h3>

        <Splide options={{perPage: 3, gap: "5rem"}} >
        {veggie.map((recipe) => {
            return(
                <SplideSlide >
                    <Link to={'/recipe/' + recipe.id}>
                        <div className='Card'  key={recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    </Link>
                </SplideSlide>
            );
        })}
        </Splide>
        </div>
    )
}

export default Veggie