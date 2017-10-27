import React from 'react';
import './../css/SearchInput.css';
import './../library/themoviedb';

export default class SearchInput extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    value: props.text,
	    defaultValue: props.defaultValue
	};
	this.onChange = this.onChange.bind(this);
	console.log(theMovieDb);
    }

    onChange(event) {
	this.props.onChange(event.target.value);
    }
  render() {
    return (
    <div className='searchInput'>
	<input type='text' name='query' value={this.state.value} onChange={this.onChange}/>
	<span className='fa fa-search'></span>
    </div>
    );
  }
}
