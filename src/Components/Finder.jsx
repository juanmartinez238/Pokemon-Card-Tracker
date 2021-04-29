import React, {useState} from 'react';
import axios from 'axios';

function Finder() {

    const [card, setCard] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        
        console.log(e.target.value)
        setCard(e.target.value);
    }


    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const url = "https://api.pokemontcg.io/v2/cards?q=name:";
            const response = await axios.get(`${url}${card}`);
            console.log("this is response", response.data.data);
            setData(response.data.data);
        }catch (err){
            console.log(err)
        }
 
    }
    return (
        <div className="finder__container">
            <form onSubmit={handleSubmit}>
            {console.log("this is data", data)}
            <label>Search for card</label>
            <input value={card} type="text" placeholder="type card name" onChange={handleChange}/>
            <button type="submit">Find Card</button>
            </form>
            
            {/* CARD WILL GO HERE */}
            <div className="finder__cardcont">
                {data.map((card) => {
                    console.log("this is card", card.images)
                    return(
                        <div className="finder__card">
                        <img src={card.images.small} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Finder;
