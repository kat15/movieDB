import React from 'react';
import Article from './../components/Article';

export default class MainSite extends React.Component {

    render() {
        return (
            <div className='articles'>
                <Article header='Hello world!' content='Welcome to this test website made in React'/>
            </div>
        );
    }
}
