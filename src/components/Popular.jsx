import React from 'react';
import { useEffect, useState,  } from 'react';
import './Popular.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () =>{

        const check = localStorage.getItem("popular");

        if (check){
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data);
        }


    };

    return (
        <div className='Wrapper'>
            <h3>Popularne przepisy:</h3>

            <Splide options={{perPage: 3, gap: "5rem"}} >
            {popular.map((recipe) => {
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
    );
}



export default Popular