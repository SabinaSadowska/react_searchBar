import React, { useState } from 'react';

function AccordionItem(props) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h3 onClick={()=>setIsVisible(!isVisible)}>
        {props.itemData.title}
      </h3>
      {isVisible ? <p>{props.itemData.description}</p> : null}
    </div>
  )
}

export default AccordionItem;

