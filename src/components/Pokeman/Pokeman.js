import React, { useEffect, useState } from 'react';
import './Pokeman.css';

const Pokeman = ({pokeman}) => {

    const{url} = pokeman;

       const[pokeManData,setPokemanData] = useState([]);
       
        
        useEffect( ()=>{
            fetch(url)
             .then(res => res.json())
              .then(data => setPokemanData(data))
               
        } ,[]);

        const{name,sprites,weight,height} = pokeManData;
         const cardImg = sprites?.back_default;
        console.log(pokeManData);
         
    return (
        <div>
             <div className="pokeman-section">
                 <div className="pokemon-cards"> 
                  
                  <img src={cardImg} alt="" />
                 
                  <div className="content-part"> 
                    <h2>Name:{name}</h2>
                    <h5> weight: {weight} </h5>
                    <h5> Height:{height} </h5>
                  </div>
                 </div>
             </div>
        </div>
    );
};

export default Pokeman;