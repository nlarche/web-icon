var React = require('react');
var WebIcon = require('./web-icon');

const Styles = {
    webIconList : {
       display: 'flex',
       flexDirection: 'row',    
       width : '30%'     
    }
};

var WebIconList = React.createClass({
    render: function() {

        var liste = ["https://www.npmjs.com/", "http://bower.io", "https://angularjs.org", "https://facebook.github.io/react/"]

        return (
            <div style={Styles.webIconList} >
                { liste.map(app => 
                    <WebIcon url={app} key={liste.indexOf(app)}/>) }
            </div>
        );
    }
});

module.exports = WebIconList;