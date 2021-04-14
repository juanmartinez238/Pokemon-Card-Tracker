import React from 'react'

function Card({name, images, tcgplayer}) {

    const pokeArray = [];

   pokeArray.push(tcgplayer.prices);

    return (
        <div className='card'>
            <h1 className='card__name'>{name}</h1>
            <img src={images.small} alt='pokemon card'/>
            {pokeArray.map((price) => {
              return(
                  Object.keys(price).map(function(key, index) {
                if(index === 0){
                return <p className='card__holofoil' key={key}>Holofoil: {price[key].market}</p>
                } else {
                    return <p className='card__reverseHolo'>Reverse Holofoil: {price[key].market}</p>
                }
            }))  
            })}
        </div>
    )
}

export default Card;
