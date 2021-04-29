import React from 'react';
import {Link} from 'react-router-dom';




function Landing() {

    return (
        <div className='landing-Container'>
            <div className='landing-Hero'><img className='landing-Hero-Image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt='Pokemon-name'/><h1>Card Tracker</h1></div>
            <div className="landing-Bottom">
                <div className='landing-Bottom-Header'>
                <div className="landing-Bottom-Text">
                <h2>Welcome to the Pokémon Card Tracker</h2>
                <p>Thanks for stopping by! This app was inspired by the nostalgic 
                Pokémon Trading Card Game many kids grew up with in the 90's. Pokémon cards
                are actually still popular today and we can aid in your quest to locate card prices.
                </p>
                <p>What would you like to do today?</p>
                </div>
                <div className="buttons__container">
                <div>
             <Link to='/browse' className='landing-Bottom-Button' style={{textDecoration:'none', color:"black"}}>Browse Cards</Link>
             </div>
                <div>
               <Link to='/finder' className='fin__button' style={{textDecoration:'none', color:"black"}}>Find Card</Link>
                </div>
                </div>
                </div>
                <div className='image-Container'><img className='landing-Bottom-Image' src='https://upload.wikimedia.org/wikipedia/en/thumb/0/09/AshXYanime.png/220px-AshXYanime.png' alt='pokemon picture'/></div>
            </div>
        </div>
    )
}

export default Landing;