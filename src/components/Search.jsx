import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Search() {



    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    }

  return (
    <FromStyle onSubmit={submitHandler}>
        <input onChange={(e) => setInput(e.target.value)} type="text" />
    </FromStyle>
  )
}

const FromStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    width:100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0;
        transform: whitesmoke;
        color: #fff;
    }
`

export default Search