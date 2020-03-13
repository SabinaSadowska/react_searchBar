import React, { useState } from 'react';


function SearchBar () {
    const [value, setValue] = useState('');

    const handleChange = () => {
        
    }

    return (
        <div>
            <input placeholder="write title" onChange={handleChange} value="">
            </input>
        </div>
    )

}

export default SearchBar 