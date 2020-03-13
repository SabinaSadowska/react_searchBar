import React from 'react';
import AccordionItem from './AccordionItem';

function Accordion(props) {
  const rednerAccrordionItems = () =>
    props.accordionData.map(
      (accordionItem) => <AccordionItem itemData={accordionItem}/>
    )
  return (
    <div>
      {rednerAccrordionItems()}
    </div>
  )
}

export default Accordion;