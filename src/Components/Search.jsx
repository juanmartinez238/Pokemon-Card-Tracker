import React, {useState} from 'react';

function Search() {
    const [userInput, setUserInput] = useState('');
   

    const handleSubmit = async (event) => {
        event.preventDefault();
    
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
        console.log(userInput);
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label>Search Pokemon</label>
        <input value={userInput} onChange={handleChange} type='text' placeholder='Search Pokemon...' ></input>
        <button type='submit'>Search</button>
        </form>
        
        </div>
    )
}

export default Search;
