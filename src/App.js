import React, { Component } from 'react'; //Component trae la clase
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes : [ ],
      searchField : ''
    };

  }

  componentDidMount() {
    //fetch('https://superheroapi.com/api/10157298358717950/id')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ heroes: users }));
  }

  handleChange = (e) =>{
    this.setState({ searchField: e.target.value})
  }

  render () {
    const { heroes, searchField } = this.state;
    const filteredHeroes = heroes.filter( hero => hero.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return(
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder = 'search heroes'
          handleChange = {this.handleChange}
        />
        <CardList heroes={filteredHeroes} />
      </div>
    )
  }
}

export default App;



