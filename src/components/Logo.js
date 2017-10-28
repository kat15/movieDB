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
                <a href={this.state.headerLink}>
                    <img src={this.state.logo}/>
                </a>
            </div>
        ) : (
            <a id='logo' href={this.state.headerLink}>{this.state.headerText}</a>
        );
    }
}
