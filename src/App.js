import React from 'react';
import SearchInput from './components/SearchInput';
import Dropdown from './components/Dropdown';
import Settings from './Settings';

class App extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    genre: 'all',
	    search: ''
	};
	this.changeGenre = this.changeGenre.bind(this);
	this.changeSearch = this.changeSearch.bind(this);
	this.search = this.search.bind(this);
    }

    changeGenre(newGenre) {
	this.setState({
	    genre: newGenre
	});
    }

    changeSearch(value) {
	this.setState({
	    search: value
	});
	if (value.trim() !== '') {
	    this.searchValue(value);
	}
    }

    search() {
	this.searchValue(this.state.search);
    }

    searchValue(value) {
	const mDB = require('moviedb')(Settings.apiKey);
	mDB.searchMovie({ query: value}, (err, res) => {
	    console.log(res);
	});
	console.log(mDB);
    }


    render() {
	var genre = [
	    "all",
	    "movie",
	    "tv shows",
	    "people"
	];
	return (
	    <div className="search">
		<Dropdown list={genre} onChange={this.changeGenre} className='genreDropdown'/>
		<SearchInput onChange={this.changeSearch} onClick={this.search}/>
	    </div>
	);
    }
}
export default App;    