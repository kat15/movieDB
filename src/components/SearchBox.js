import React from 'react';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import Logo from './Logo';

export default class SearchBox extends React.Component {

    render() {
	return (
	    <div className='search'>
		<Logo headerText='MovieDB React template'/>
		<Dropdown list={this.props.genre} onChange={this.props.changeGenre} className='genreDropdown'/>
		<SearchInput onChange={this.props.changeSearch} onClick={this.props.search}/>
	    </div>
	);
    }
}
