import React from 'react';
import Menu from './components/Menu';
import List from './components/List';
import Settings from './Settings';

const mDB = require('moviedb')(Settings.apiKey);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [
                'all',
                'movie',
                'tv shows',
                'people'
            ],
            selectedGenre: 'all',
            search: '',
            list: [],
            page: 1,
            total_pages: 1,
            total_results: 0
        };
        this.changeGenre = this.changeGenre.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.search = this.search.bind(this);
        this.getMovieInfo = this.getMovieInfo.bind(this);
    }

    changeGenre(newGenre) {
        this.setState({
            selectedGenre: newGenre
        });
    }

    changeSearch(value) {
        this.setState({
            search: value
        });
        if (value.trim() !== '') {
            this.searchValue(value);
        }
    }

    changePage(newPage) {
        this.setState({
            page: newPage
        });
    }

    search() {
        if (this.state.search.trim() !== '') {
            this.setState({
                page: 1
            });
            this.searchValue(this.state.search);
        }
    }

    searchValue(value) {
        mDB.searchMovie({query: value, page: this.state.page, language: 'pl-PL'}, (err, res) => {
            this.setState({
                page: res.page,
                total_pages: res.total_pages,
                total_results: res.total_results,
                list: res.results
            });
        });
    }

    getMovieInfo(id) {
        mDB.movieInfo({id: id, language: 'pl-PL'}, (err, res) => {
            console.log(res);
        });
        console.log(this.state.list);
    }


    render() {
        return (
            <div className='container'>
                <Menu genre={this.state.genre} changeGenre={this.changeGenre} changeSearch={this.changeSearch}
                        search={this.search}/>
                <List list={this.state.list} onRecordClick={this.getMovieInfo}/>
            </div>
        );
    }
}

export default App;