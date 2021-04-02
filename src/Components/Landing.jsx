import React from 'react';
import {Link} from 'react-router-dom';




function Landing() {

    return (
        <div className='landing-Container'>
            <div className='landing-Hero'><img className='landing-Hero-Image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt='Pokemon-name'/><h1>Card Tracker</h1></div>
            <div className="landing-Bottom">
                <div className='landing-Bottom-Header'><h2>Welcome to the Pokemon Card Tracker app.</h2><p>Thanks for stopping by!</p><button className='landing-Bottom-Button'><Link to='/browse' style={{textDecoration:'none', color:'white'}}>Get Started</Link></button></div>
                <div className='image-Container'><img className='landing-Bottom-Image' src='https://upload.wikimedia.org/wikipedia/en/thumb/0/09/AshXYanime.png/220px-AshXYanime.png' alt='pokemon picture'/></div>
            </div>
        </div>
    )
}

export default Landing;