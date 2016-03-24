var React = require('react');
var WebIcon = require('./web-icon');

const Styles = {
    webIconList: {
        display: 'flex',
        flexDirection: 'row',
        width: '30%'
    }
};

var WebIconList = React.createClass({
    getDefaultProps() {
        return { websites: [] };
    },
    render: function() {
        return (
            <div style={Styles.webIconList} >
                { this.props.websites.map(app =>
                    <WebIcon url={app} key={this.props.websites.indexOf(app) }/>) }
            </div>
        );
    }
});

module.exports = WebIconList;