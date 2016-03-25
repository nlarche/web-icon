import React from 'react';
import Styles from './web-icon.css';

var WebIcon = React.createClass({
    getInitialState() {
        return {
            favicon: null,
            name: null           
        };
    },
    searchFavicon: function() {
        var favicon;

        if (this.props.url.indexOf('favicon') === -1) {
            favicon = this.props.url + '/favicon.ico'
        } else {
            favicon = this.props.url;
        }     
        return favicon;      
    },
    componentDidMount() {

        var url = this.props.url;

        var parser = document.createElement('a');
        parser.href = url

        this.setState({
            favicon: this.searchFavicon(),
            name: parser.hostname,
            origin : parser.origin
        });
    },
    render: function() {
        return (
            <div className={Styles.webIcon} >
                <a href={this.state.origin} title={this.state.name} target="_blank"  >
                    <img src={this.state.favicon} alt={this.state.name} className={Styles.image}/>
                </a>
            </div>
        );
    }
});

module.exports = WebIcon;



