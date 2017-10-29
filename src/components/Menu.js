import React from 'react';
import Search from './Search';
import Logo from './Logo';
import './../css/Menu.css';
import {
    Link
} from 'react-router-dom';

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
        this.props.changeGenre(event);
    }

    changeSearch(event) {
        this.props.changeSearch(event);
    }

    search(event) {
        this.props.search(event.target.value);
    }

    render() {
        return (
            <div id='menuBar'>
                <div className='header'>
                    <Logo headerText='MovieDB React template'/>
                    <div className='button' onClick={this.openCloseMenu}>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </div>
                </div>
                <div className={this.state.isMenuOpened ? 'collapse opened' : 'collapse'}>
                    <ul>
                        <li className="selected">
                            <Link to='/home'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/movies'>MOVIES</Link>
                        </li>
                        <li>
                            <Link to='/people'>PEOPLE</Link>
                        </li>
                        <li>
                            <Link to='/news'>NEWS</Link>
                        </li>
                        <li>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                    </ul>
                    <Search list={this.state.genre} onChange={this.changeSearch} changeGenre={this.changeGenre}
                            onClick={this.search}/>
                </div>
            </div>
        );
    }
}