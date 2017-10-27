import React from 'react';
import SearchInput from './components/SearchInput';
import Dropdown from './components/Dropdown';

class App extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    genre: 'all',
	    search: ''
	};
	this.changeGenre = this.changeGenre.bind(this);
	this.changeSearch = this.changeSearch.bind(this);
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
		<SearchInput onChange={this.changeSearch}/>
	    </div>
	);
    }
}
export default App;