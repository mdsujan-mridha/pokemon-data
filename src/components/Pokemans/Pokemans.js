import React, { useEffect, useState } from 'react';
import Pokeman from '../Pokeman/Pokeman';
import './Pokemans.css';
const Pokemans = () => {
  
     const[pokemans, setPokemans] = useState([]);
      const pokemanData= pokemans?.results;
    //   console.log(pokemanData);
      useEffect( ()=>{
          fetch("https://pokeapi.co/api/v2/pokemon")
           .then(res => res.json())
            .then(data => setPokemans(data));
           
      } ,[])
     
    return (
        <div className='pokemons-all-card'>
             {
                 pokemanData?.map((pokeman,i)=> <Pokeman
                  key={i}
                 pokeman={pokeman}
                 ></Pokeman>)
             }
        </div>
    );
};

export default Pokemans;