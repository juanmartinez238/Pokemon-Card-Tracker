import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card';

function Browse() {
    const [data, setData] = useState([])

    useEffect( ()=>{
        const url = `https://api.pokemontcg.io/v2/cards`;
    
        const fetchData = async () => {
            const result = await axios.get(`${url}`);
            setData(result.data.data);
            console.log(result.data.data);
        }
    
        try{
            fetchData();
        }catch (err) {
            console.log(err)
        }
      
    },[])

    return (
        <div className='card-Container'>
        {data.length > 0 && data.map(pokemon => 
        <Card key={pokemon.id} {...pokemon}/>)}
        </div>
    )
}

export default Browse;
