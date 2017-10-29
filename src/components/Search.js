import React from 'react';
import Dropdown from './Dropdown';
import './../css/SearchInput.css';
import {withRouter} from 'react-router';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGenre: props.list ? props.list[0] : '',
            genre: props.list,
            value: props.text,
            defaultValue: props.defaultValue
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.changeGenre = this.changeGenre.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClick(event) {
        this.props.onClick(event.target.value);
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    changeGenre(event) {
        this.setState({
            selectedGenre: event
        });
        this.props.changeGenre(event);
        this.redirectToSubmit();
    }

    onSubmit(event) {
        event.preventDefault();
        this.redirectToSubmit();
    }

    redirectToSubmit() {
        this.props.history.push(`/search/${this.state.selectedGenre}/${this.state.value}`);
    }

    render() {
        return (
            <form className='searchInput' onSubmit={this.onSubmit} method='GET'>
                <input type='text' onChange={this.onChange} placeholder='Search...'/>
                <Dropdown list={this.state.genre} onChange={this.changeGenre} className='genreDropdown'/>
            </form>
        );
    }
}

export default withRouter(Search);