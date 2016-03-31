'use strict';

import React from 'react';
import WebIcon from './web-icon';
import Styles from './web-icon.css';

export default class WebIconList extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            websites : []
        };   
    }  
    componentWillReceiveProps(nextProps) {
         this.setState({websites : nextProps.websites});
    } 
    componentDidMount() {
        this.setState({websites : this.props.websites});
    }
    render () {        
        return (
            <div className={Styles.webIconList} >
                { this.state.websites.map(app =>
                    <WebIcon url={app} key={this.state.websites.indexOf(app) } noLink={this.props.noLink} grayscale={this.props.grayscale}/>) }
            </div>
        );
    }
};
