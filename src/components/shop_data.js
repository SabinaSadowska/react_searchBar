import React, { useState } from 'react';
import Card from './Card'



function ShowData(props) {

    
    const [inputValue, saveInputValue] = (useState(''))

    const handleChange = (event) => {
        saveInputValue(event.target.value);
        event.preventDefault();
    }

   const renderCard = () => 
    props.data.map((el) => {
        if (el.name === inputValue || inputValue === '') {
            console.log(11111)
           return <Card item={el} key={el.id}/>
        } else {return null}
        }   
    )
   
 
    return(
        <div>
            <form>
                <input placeholder="write title" onChange={handleChange} type="text" value={inputValue}/>
            </form>
            {renderCard()}
        </div>
    )
}

export default ShowData