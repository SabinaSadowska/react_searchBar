import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import Accordion from './components/accrodion/Accordion';
import { Link } from 'react-router-dom';
import { eccomerceFakeApi } from './fakeApi/eccommerce';
import SearchBar from './components/search_bar';
import ShowData from './components/shop_data'

const data = [{
  title: 'Pytanie 1',
  description: 'Odpowiedz 1',
  },
  {
    title: 'Pytanie 2',
    description: 'Odpowiedz 2',
  },
  {
    title: 'Pytanie 3',
    description: 'Odpowiedz 3',
  },
];

class Home extends Component {
  render() {
    console.log(eccomerceFakeApi);
    return (
      <div>
        <Accordion accordionData={data} />
        <ShowData data={eccomerceFakeApi}/>
      </div>
    );
  }
}

export default Home;