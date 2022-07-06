import React from 'react';
import { FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks} from 'react-icons/gi';
import './Category.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category() {
  return (
    <div className='List'>
        <Slink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Włochy</h4>
        </Slink>
        <Slink to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>Amerykańskie</h4>
        </Slink>
        <Slink to={'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Tajskie</h4>
        </Slink>
        <Slink to={'/cuisine/japanese'}>
            <GiChopsticks/>
            <h4>Japońskie</h4>
        </Slink>

    </div>
  )
}


const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: #fff;
        font-size: 0.8rem;
    }

    svg{
        color: #fff;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`

export default Category