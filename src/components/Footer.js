import React from 'react';
import './../css/Footer.css';

export default class Footer extends React.Component {

    render() {
        return (
            <footer id='footer'>
                <hr/>
                © 2017 <a href='mailto:krzysztofadamczewski85@gmail.com'>Christopher Adamczewski</a>.<br/> Based on <a href='http://dbaf.ru/moviedb/'>MovieDB Wordpress Theme</a>. All rights reserved.
            </footer>
        );
    }
}
