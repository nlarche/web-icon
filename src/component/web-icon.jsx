import React from 'react';
import Styles from './web-icon.css';


var WebIcon = React.createClass({   
   
    render: function() {
        var parser = document.createElement('a');
        parser.href = this.props.url;

        var favicon = this.props.url + "/favicon.ico";
        var name = parser.hostname;      

        return (
            <div className={Styles.webIcon} >
                <a href={this.props.url} title={name} target="_blank"  >
                    <img src={favicon} alt={name} className={Styles.image}/>
                </a>
            </div>
        );
    }
});

module.exports = WebIcon;



