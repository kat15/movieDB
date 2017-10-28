import React from 'react';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import Logo from './Logo';
import './../css/Menu.css';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: this.props.genre,
            isMenuOpened: false
        };
        this.openCloseMenu = this.openCloseMenu.bind(this);
        this.changeGenre = this.changeGenre.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.search = this.search.bind(this);
    }

    openCloseMenu(event) {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        })
    }

    changeGenre(event) {
        this.props.changeGenre(event.target.value);
    }

    changeSearch(event) {
        this.props.changeSearch(event.target.value);
    }

    search(event) {
        this.props.search(event.target.value);
    }

    render() {
        return (
            <div id='menuBar'>
                <div class='header'>
                    <Logo headerText='MovieDB React template'/>
                    <div class='button' onClick={this.openCloseMenu}>
                        <span class='icon-bar'></span>
                        <span class='icon-bar'></span>
                        <span class='icon-bar'></span>
                    </div>
                </div>
                <div className={this.state.isMenuOpened ? 'collapse opened' : 'collapse'}>
                    <ul>
                        <li>
                            <a href="">HOME</a>
                        </li>
                        <li>
                            <a href="">MOVIES</a>
                        </li>
                        <li>
                            <a href="">PEOPLE</a>
                        </li>
                        <li>
                            <a href="">NEWS</a>
                        </li>
                        <li>
                            <a href="">ABOUT</a>
                        </li>
                    </ul>
                    {/*<Dropdown list={this.state.genre} onChange={this.changeGenre} className='genreDropdown'/>*/}
                    <SearchInput onChange={this.changeSearch} onClick={this.search}/>
                </div>
            </div>
        );
    }
}
