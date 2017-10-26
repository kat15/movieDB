import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.Component {

    constructor(props) {
	super(props);
	this.show = false;
	this.list = props.list;
	this.selected = props.selected ? props.selected : this.list[0];
	this.showHideDropdown = this.showHideDropdown.bind(this);
    }

    showHideDropdown() {
	console.log('clicked');
	this.show = true;
	this.selected = '1';
    }

    render() {
	return (
	    <div className='dropdown'>{this.show}{this.selected}
		<div className='container' onClick={this.showHideDropdown}>
		    {this.selected}<span className='fa fa-sort icon'/>
		</div>
		<ul>
		    {this.list.map(function(object, i){
			return <li key={i}> 
			    {object}
			</li>
		    })}
		</ul>
	    </div>
	);
    }
}