import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Card from './Card'



function ShowData(props) {

    const [inputValue, saveInputValue] = (useState(''));
    const [clicked, setClick] = (useState(false));
   

    const handleChange = (event) => {
        saveInputValue(event.target.value);
        event.preventDefault();
    }

    const handleCategory = (event) => {
        
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
                <br></br>
                <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </form>
            {renderCard()}
        </div>
    )
}

ShowData.propTypes = {
    data: PropTypes.array
}

export default ShowData