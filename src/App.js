import React, { Component } from 'react'; //Component trae la clase
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			heroes: [],
			heroesMarvel: [],
			searchField: ''
		};

	}

	componentDidMount() {
		//fetch('https://superheroapi.com/api/10157298358717950/id')
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ heroes: users }));

		// fetch('http://gateway.marvel.com//v1/public/characters?limit=100&ts=1&apikey=c46197f79f373ff6b5c458314d26732f&hash=972d7c7ecaed6fe18b83e6ac8c04e0af')
		fetch('https://gateway.marvel.com/v1/public/series/8842/characters?limit=100&ts=1&apikey=c46197f79f373ff6b5c458314d26732f&hash=972d7c7ecaed6fe18b83e6ac8c04e0af')
			.then(response => response.json())
			.then(res => {
				console.log("Here is loading the marvel characters");
				const heroesMarvel = res.data.results
				console.log(heroesMarvel);
				this.setState({
					heroesMarvel
				})
			})
		// .then(users => this.setState({ heroes: users }));



	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value })
	}

	render() {
		const { searchField, heroesMarvel } = this.state;
		const filteredHeroes = heroesMarvel.filter(hero => hero.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

		return (
			<div className="App">
				<h1> Heroes Rolodex </h1>
				<SearchBox
					placeholder='search heroes'
					handleChange={this.handleChange}
				/>
				<CardList heroes={filteredHeroes} />
			</div>
		)
	}
}

export default App;