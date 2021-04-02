import React from 'react'

function Card({name, images, tcgplayer}) {

    const prices = tcgplayer;
  
    console.log('this is prices',prices)
    return (
        <div className='card'>
            <h1>{name}</h1>
            <img src={images.small} alt='pokemon card'/>
            <p></p>
        </div>
    )
}

export default Card;
