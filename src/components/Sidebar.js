import React from 'react';
import {
    Link
} from 'react-router-dom';

import './../css/Logo.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo || false,
            headerLink: '',
            headerText: props.headerText || ''
        };
    }

    render() {
        return (
            <div id='sidebar'>

            </div>
        );
    }
}
