import React from 'react';
import './../css/SearchInput.css';

export default class SearchInput extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    value: props.text,
	    defaultValue: props.defaultValue
	};
	this.onClick = this.onClick.bind(this);
	this.onChange = this.onChange.bind(this);
    }

    onClick(event) {
	this.props.onClick(event.target.value);
    }

    onChange(event) {
	this.props.onChange(event.target.value);
    }

    render() {
	return (
	    <div className='searchInput'>
		<input type='text' name='query' value={this.state.value} onChange={this.onChange}/>
		<span className='fa fa-search' onClick={this.onClick}></span>
	    </div>
	);
  }
}
