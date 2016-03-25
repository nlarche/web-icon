import React from 'react';
import WebIcon from './web-icon';
import Styles from './web-icon.css';

var WebIconList = React.createClass({
    getDefaultProps() {
        return { websites: [] };
    },
    render: function() {
        return (
            <div className={Styles.webIconList} >
                { this.props.websites.map(app =>
                    <WebIcon url={app} key={this.props.websites.indexOf(app) }/>) }
            </div>
        );
    }
});

module.exports = WebIconList;