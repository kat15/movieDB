import React from 'react';
import {
    Link
} from 'react-router-dom';

import './../css/Logo.css';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            content: props.content,
            readMore: props.readMore,
            id: props.id,
            link: `/news/${props.id}`
        };
    }

    render() {
        return (
            <div className='box-container article'>
                <h2 className='header'>{this.state.header}</h2>
                <div className='content'>
                    {this.state.content}
                    {this.state.readMore &&
                        <Link className='button' to={this.state.link}>Read more</Link>
                    }
                </div>
            </div>
        );
    }
}
