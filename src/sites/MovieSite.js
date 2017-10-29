import React from 'react';
import Search from './../logic/Search';
import './../css/MovieSite.css';

export default class MoviesSite extends React.Component {

    constructor(props) {
        super(props);
        let params = props.match.params;
        this.state = {
            id: params.id,
            object: null,
            language: params.language || 'pl-PL'
        };
        Search.getMovieInfo(this.state.id, this.state.language, this.getMovie, this);
    }

    getMovie(record, t) {
        t.setState({
            object: record
        });
        console.log(record);
    }

    render() {
        return (
            <div id='movie'>
                <div className='top'>
                </div>
            </div>
        );
    }
}
