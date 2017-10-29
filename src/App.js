import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import MainSite from './sites/MainSite';
import AboutSite from './sites/AboutSite';
import SearchSite from './sites/SearchSite';
import PeopleSite from './sites/PeopleSite';
import MovieSite from './sites/MovieSite';
import NewsSite from './sites/NewsSite';

export default class App extends React.Component {

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
            language: 'pl-PL',
            list: [],
            page: 1,
            total_pages: 1,
            total_results: 0
        };
        this.changeGenre = this.changeGenre.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
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
            this.checkWhatSearch(value);
            // this.searchAll(value);
        }
    }

    changePage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <Router>
                <div className='container'>
                    <Menu genre={this.state.genre} changeGenre={this.changeGenre} changeSearch={this.changeSearch}/>
                    <Route exact path='/' component={MainSite}/>
                    <Route path='/search/:genre/:query/:page?' component={SearchSite}/>
                    <Route path='/about' component={AboutSite}/>
                    <Route path='/movie/:id?' component={MovieSite}/>
                    <Route path='/people' component={PeopleSite}/>
                    <Route path='/news' component={NewsSite}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}