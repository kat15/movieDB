import React from 'react';
import './../css/Dropdown.css';

export default class Dropdown extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    className: `${props.className} dropdown`,
	    show: false,
	    list: props.list,
	    selected: props.selected || (props.value || props.list[0]),
	    dropdownMouseClick: false
	};
	this.showHideDropdown = this.showHideDropdown.bind(this);
	this.selectDropdown = this.selectDropdown.bind(this);
	this.mouseDownHandler = this.mouseDownHandler.bind(this);
	this.mouseUpHandler = this.mouseUpHandler.bind(this);
    }

    showHideDropdown() {
	this.setState({
	    show: !this.state.show
	});
    }

    selectDropdown(index) {
	let selected = this.state.list[index];
	this.setState({
	    selected: selected,
	    show: false
	});
	this.props.onChange(selected);
    }

    componentDidMount() {
	window.addEventListener('mousedown', this.pageClick.bind(this), false);
    }

    pageClick(e) {
	if (this.dropdownMouseClick) {
	    return;
	}

	this.setState({
	    show: false
	});
    }

    mouseDownHandler() {
	this.dropdownMouseClick = true;
    }

    mouseUpHandler() {
	this.dropdownMouseClick = false;
    }

    render() {
	return (
	    <div className={this.state.className} onMouseDown={this.mouseDownHandler} onMouseUp={this.mouseUpHandler}>
		<div className='container' onClick={this.showHideDropdown}>
		    {this.state.selected}<span className='fa fa-sort icon'/>
		</div>
		<ul className={this.state.show ? 'show' : ''}>
		    {this.state.list.map((object, i) => {
			return <li key={i} onClick={e => this.selectDropdown(i)}> 
			    {object}
			</li>
		    })}
		</ul>
	    </div>
	);
    }
}
