import React from 'react';
import Styles from './web-icon.css';

var WebIcon = React.createClass({
    getInitialState() {
        return {
            favicon: null,
            name: null,
            counter: 0
        };
    },  
    searchFavicon: function() {
        var favicon;

        if (this.state.counter === 0) {
            favicon = this.props.url + '/favicon.ico'
        } else {
            favicon = this.props.url + '/assets/favicon.png'
        }
        return favicon;
        //this.setState({ favicon: favicon });
    },
    componentDidMount() {

        var url = this.props.url;

        var parser = document.createElement('a');
        parser.href = url

        this.setState({
            favicon: this.searchFavicon(),
            name: parser.hostname
        });     
    },
    render: function() {
        return (
            <div className={Styles.webIcon} >
                <a href={this.props.url} title={this.state.name} target="_blank"  >
                    <img src={this.state.favicon} alt={this.state.name} className={Styles.image}/>
                </a>
            </div>
        );
    }
});

module.exports = WebIcon;



