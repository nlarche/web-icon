'use strict';

import React from 'react';
import Styles from './web-icon.css';

export default class WebIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favicon: null,
            name: null,
            loaded : false
        };
        
        this.onLoad = this.onLoad.bind(this);
    }
    
    onLoad(){
         this.setState({
            loaded: true
        }); 
    }
    
    searchFavicon() {
        var favicon;

        if (this.props.url.indexOf('favicon') === -1) {
            favicon = this.props.url + '/favicon.ico'
        } else {
            favicon = this.props.url;
        }
        return favicon;
    }
    componentDidMount() {

        var url = this.props.url;

        var parser = document.createElement('a');
        parser.href = url

        this.setState({
            favicon: this.searchFavicon(),
            name: parser.hostname,
            origin: parser.origin
        });
    }
    render() {    
       return (
            <div className={Styles.webIcon} >               
              <a href={this.state.origin} title={this.state.name} target="_blank" className={this.state.loaded ? null : Styles.hidden}  >
                        <img src={this.state.favicon} alt={this.state.name} className={Styles.image} onLoad={this.onLoad} />
                </a>
              <div className={this.state.loaded ? Styles.hidden : null}>
                <div className={Styles.preview}></div>
              </div>                     
            </div>
        );
    }
}

