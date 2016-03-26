'use strict';

import React from 'react';
import WebIcon from './web-icon';
import Styles from './web-icon.css';

export default class WebIconList extends React.Component {
    
    constructor(props) {
        super(props);    
    }   
    render () {
        return (
            <div className={Styles.webIconList} >
                { this.props.websites.map(app =>
                    <WebIcon url={app} key={this.props.websites.indexOf(app) }/>) }
            </div>
        );
    }
};
