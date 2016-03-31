'use strict';

import React from 'react';
import Styles from './web-icon.css';

export default class WebIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favicon: null,
            name: null,
            loaded: false,
        };

        this.onLoad = this.onLoad.bind(this);
    }
    init(props) {
        var url = props.url;

        var parser = document.createElement('a');
        parser.href = url

        var favicon = this.searchFavicon(url);

        this.setState({
            favicon: favicon,
            name: parser.hostname,
            origin: parser.origin,
        });
    }
    onLoad() {
        this.setState({
            loaded: true
        });
    }
    searchFavicon(url) {
        var favicon;

        if (url && url.indexOf('favicon') === -1) {
            favicon = url + '/favicon.ico'
        } else {
            favicon = url;
        }
        return favicon;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.loaded){
            return true;
        }
        // update when new url only
        return nextProps.url === this.props.url ? false : true;
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }
    componentDidMount() {
        this.init(this.props);
    }
    render() {

        var loaded = this.state.loaded;
        var noLink = this.props.noLink;

        var imageStyle = this.props.grayscale ? Styles.grayscale : Styles.image;

        var image = <img src={this.state.favicon} alt={this.state.name} className={imageStyle} onLoad={this.onLoad} />

        return (
            <div className={Styles.webIcon} >
                <div  className={loaded ? null : Styles.hidden} >
                    { !noLink &&
                        <a href={this.state.origin} title={this.state.name} target="_blank"  >
                            {image}
                        </a>
                    }
                    {
                        noLink && image
                    }
                </div>
                <div className={loaded ? Styles.hidden : null}>
                    <div className={Styles.preview}></div>
                </div>
            </div>
        );
    }
}

