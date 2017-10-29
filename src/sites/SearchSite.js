import React from 'react';
import Search from './../logic/Search';
import List from '../components/List';

export default class SearchSite extends React.Component {
    constructor(props) {
        super(props);
        let params = props.match.params;
        this.state = {
            result: [],
            genre: params.genre,
            query: params.query,
            language: params.language || 'pl-PL',
            page: params.page || 1
        };
        this.checkWhatSearch();
        this.getResults = this.getResults.bind(this);
    }

    componentWillReceiveProps(props) {
        let params = props.match.params;
        this.setState({
            genre: params.genre,
            query: params.query,
            page: params.page
        });
        this.checkWhatSearch();
    }

    getResults(data, t) {
        t.setState({
            result: data
        });
    }

    checkWhatSearch() {
        let selectedGenre = this.state.genre,
            value = this.state.query,
            language = this.state.language,
            page = this.state.page;

        if (value.trim() === '') {
            return;
        }
        if (selectedGenre === 'all') {
            Search.searchAll(value, page, language, this.getResults, this);
        } else if (selectedGenre === 'movie') {
            Search.searchMovie(value, page, language, this.getResults, this);
        } else if (selectedGenre === 'tv shows') {
            Search.searchTV(value, page, language, this.getResults, this);
        } else if (selectedGenre === 'people') {
            Search.searchPerson(value, page, language, this.getResults, this);
        } else if (selectedGenre === 'company') {
            Search.searchCompany(value, page, language, this.getResults, this);
        }
    }

    render() {
        return (
            <div>
                genre: {this.state.genre}<br/>
                query: {this.state.query}
                <List list={this.state.result}/>
            </div>
        );
    }
}
