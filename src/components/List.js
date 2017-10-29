import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

import './../css/List.css';
import Settings from './../Settings';

let headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    imageListSize = {
        'width': 300,
        'height': 300
    };

class List extends React.Component {

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
        let loadedImages = 0,
            list = props.list.list;

        if (list.length) {
            this.setState({
                loaded: false
            });
            list.map((object, i) => {
                if ((object.poster_path === null || object.poster_path === undefined) &&
                    (object.profile_path === null || object.profile_path === undefined) &&
                    (object.logo_path === null || object.logo_path === undefined)) {
                    loadedImages++;
                    this.checkLoadedImages(loadedImages, props.list);
                    return true;
                }
                object.img = `${Settings.imageUrl}w${imageListSize.width}_and_h${imageListSize.height}_bestv2${object.poster_path || object.profile_path || object.logo_path}`;
                axios.get(object.img, {
                    headers: headers
                }).then(res => {
                    loadedImages++;
                    this.checkLoadedImages(loadedImages, props.list);
                });
                return true;
            });
        }
    }

    checkLoadedImages(loadedImages, props) {
        if (loadedImages === props.list.length) {
            this.setState({
                list: props.list,
                loaded: true
            });
        }
    }

    changePage(e) {
        var newPage = 0;
        this.props.changePage(newPage);
    }

    onRecordClick(id) {
        console.log(id);
        console.log(this);
        this.props.history.push(`/movie/${id}`);
    }

    render() {
        return this.state.loaded ? (
            <ul id='movieList' className={this.state.list.length ? '' : 'hide'}>
                {this.state.list.map((object, i) => {
                    return <li key={i} onClick={e => this.onRecordClick(object.id)}>
                        <img src={object.img} alt={object.title || object.name}/>
                        <span className='text'>{object.title || object.name}</span>
                    </li>
                })}
            </ul>
        ) : (
            <div id='loading'>
                <div className='loadingButton'>Loading</div>
                <div className='loader-ring'></div>
            </div>
        );
    }
}

export default withRouter(List);