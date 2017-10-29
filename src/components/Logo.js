import React from 'react';
import './../css/Logo.css';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo || false,
            headerLink: '',
            headerText: props.headerText || ''
        };
    }

    render() {
        return this.state.logo ? (
            <div id='logo'>
                <a href='/'>
                    <img src={this.state.logo} alt={this.state.headerText}/>
                </a>
            </div>
        ) : (
            <a id='logo' href='/'>{this.state.headerText}</a>
        );
    }
}
