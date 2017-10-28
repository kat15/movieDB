import React from 'react';
import axios from 'axios';
import './../css/List.css';
import Settings from './../Settings';
let headers = {
	'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    imageListSize = {
	'width': 300,
	'height': 300
    };

export default class List extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    loaded: true,
	    list: props.list,
	    className: `${props.className} dropdown`
	};
	this.changePage = this.changePage.bind(this);
	this.onRecordClick = this.onRecordClick.bind(this);
    }

    componentWillReceiveProps(props) {
	let loadedImages = 0;

	this.setState({
	    loaded: false
	});
	props.list.map((object, i) => {
	    if (object.backdrop_path === null || object.backdrop_path === undefined) {
		loadedImages++;
		return true;
	    }
	    object.backdrop_img = `${Settings.imageUrl}w${imageListSize.width}_and_h${imageListSize.height}_bestv2${object.backdrop_path}`;
	    axios.get(object.backdrop_img, {
		headers: headers
	    }).then(res => {
		loadedImages++;
		if (loadedImages === props.list.length) {
		    this.setState({
			list: props.list,
			loaded: true
		    });
		}
	    });
	    return true;
	});
    }

    changePage(e) {
	var newPage = 0;
	this.props.changePage(newPage);
    }

    onRecordClick(id) {
	console.log(id);
	this.props.onRecordClick(id);
    }

    render() {
	return this.state.loaded ? (
	    <ul id='movieList'>
		{this.state.list.map((object, i) => {
		    return <li key={i} onClick={e => this.onRecordClick(object.id)}>
			<img src={object.backdrop_img}/>
			<span className='text'>{object.title}</span>
		    </li>
		})}
	    </ul>
	) : 'Loading...';
    }
}
